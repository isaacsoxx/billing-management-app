import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { fetchAuthSession, signOut } from 'aws-amplify/auth';
import { catchError, filter, from, map, of, switchMap } from 'rxjs';
import {
  getAuthSession,
  removeAuthSession,
  removeAuthSessionError,
  removeAuthSessionSuccess,
  setAuthSessionError,
  setAuthSessionSuccess,
} from '..';
import { withLoading } from '../../../common';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private store: Store) {}

  getAuthSession$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAuthSession),
      switchMap(() =>
        from(fetchAuthSession()).pipe(
          withLoading(this.store),
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
