import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { fetchAuthSession, signOut } from 'aws-amplify/auth';
import { catchError, filter, from, map, of, switchMap, tap } from 'rxjs';
import {
  getAuthSession,
  registerTrustDevice,
  removeAuthSession,
  removeAuthSessionError,
  removeAuthSessionSuccess,
  setAuthSessionError,
  setAuthSessionSuccess,
  setTrustedDeviceKey,
  setTrustedDeviceSuccess,
  storeDeviceKey,
} from '..';
import { setError, setSuccess, withLoading } from '../../../common';
import { environment } from '../../../environments/environment.development';
import { AuthenticationService } from '../..';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private authenticatorService: AuthenticationService
  ) {}

  setTrustedDeviceKey = createEffect(() =>
    this.actions$.pipe(
      ofType(setTrustedDeviceKey),
      map(() => {
        const deviceKey = localStorage.getItem('device-key');
        return setTrustedDeviceSuccess({ deviceKey: deviceKey ?? '' });
      })
    )
  );

  storeDeviceKey$ = createEffect(() =>
    this.actions$.pipe(
      ofType(storeDeviceKey),
      tap(({ deviceKey }) => of(localStorage.setItem('device-key', deviceKey))),
      map(() => setSuccess({ success: 'Dispositivo almacenado.' }))
    )
  );

  registerTrustDevice$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerTrustDevice),
      switchMap(({ deviceKey }) =>
        this.authenticatorService.registerDeviceTrust(deviceKey).pipe(
          withLoading(this.store),
          map((res: any) => storeDeviceKey({ deviceKey: deviceKey.deviceKey })),
          catchError((response: HttpErrorResponse) =>
            of(setError({ error: response.error.message }))
          )
        )
      )
    )
  );

  getAuthSession$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAuthSession),
      switchMap(() =>
        from(fetchAuthSession()).pipe(
          withLoading(this.store),
          filter((session) => !!session.userSub),
          map((session) => {
            const userSub = session.userSub;
            if (!userSub) {
              setAuthSessionError({
                error: 'Unable to fetch your session. Try again.',
              });
            }
            const poolId = environment.aws_cognito.userPoolClientId;

            const accessToken = session.tokens?.accessToken.toString() ?? '',
              role = session.tokens?.idToken?.payload['custom:role'] as string,
              uuid = session.tokens?.idToken?.payload['custom:uuid'] as string,
              deviceKey =
                sessionStorage.getItem(
                  `CognitoIdentityServiceProvider.${poolId}.${userSub}.deviceKey`
                ) ?? '';

            return setAuthSessionSuccess({
              session: { accessToken, role, uuid, deviceKey },
            });
          }),
          catchError(() =>
            of(
              setAuthSessionError({
                error: 'There was an error while fetching your session.',
              })
            )
          )
        )
      )
    )
  );

  removeAuthSession = createEffect(() =>
    this.actions$.pipe(
      ofType(removeAuthSession),
      switchMap(() =>
        from(signOut()).pipe(
          withLoading(this.store),
          map(() => removeAuthSessionSuccess()),
          catchError(() => of(removeAuthSessionError()))
        )
      )
    )
  );
}
