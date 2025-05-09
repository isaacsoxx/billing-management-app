import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetchAuthSession, signOut } from 'aws-amplify/auth';
import { catchError, filter, from, map, of, switchMap } from 'rxjs';
import {
  getAuthSession,
  removeAuthSession,
  removeAuthSessionError,
  removeAuthSessionSuccess,
  setAuthSessionError,
  setAuthSessionSuccess,
} from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions) {}

  getAuthSession$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAuthSession),
      switchMap(() =>
        from(fetchAuthSession()).pipe(
          filter((session) => !!session.userSub),
          map((session) => {
            if (!session.userSub) {
              setAuthSessionError({
                error: 'Unable to fetch your session. Try again.',
              });
            }

            const accessToken = session.tokens?.accessToken.toString() ?? '',
              role = session.tokens?.idToken?.payload['custom:role'] as string,
              uuid = session.tokens?.idToken?.payload['custom:uuid'] as string;

            return setAuthSessionSuccess({
              session: { accessToken, role, uuid },
            });
          }),
          catchError((error) => {
            console.log('Error', error);
            return of(
              setAuthSessionError({
                error: 'There was an error while fetching your session.',
              })
            );
          })
        )
      )
    )
  );

  removeAuthSession = createEffect(() =>
    this.actions$.pipe(
      ofType(removeAuthSession),
      switchMap(() =>
        from(signOut()).pipe(
          map(() => removeAuthSessionSuccess()),
          catchError(() => of(removeAuthSessionError()))
        )
      )
    )
  );
}
