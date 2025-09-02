import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, switchMap, tap } from 'rxjs';
import {
  iApiResponseModel,
  setError,
  setSuccess,
  withLoading,
} from '../../../common';
import { iUser } from '../../models';
import { UsersService } from '../../services/users.service';
import {
  getAllSubscriptions,
  getAllUsers,
  setAllSubscriptionsError,
  setAllSubscriptionsSuccess,
  setAllUsersError,
  setAllUsersSuccess,
  setNewSubscription,
  setNewSubscriptionSuccess,
  setNewUser,
  setNewUserSuccess,
} from '../actions/users.actions';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private usersService: UsersService
  ) {}

  getAllUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllUsers),
      switchMap(() =>
        this.usersService.getAllUsersAsync().pipe(
          withLoading(this.store),
          map((usersRes: iApiResponseModel<iUser>) =>
            setAllUsersSuccess({ allUsers: usersRes.data })
          ),
          catchError((response: HttpErrorResponse) =>
            of(
              setError({ error: response.error.message }),
              setAllUsersError({ error: true })
            )
          )
        )
      )
    )
  );

  setNewUser = createEffect(() =>
    this.actions$.pipe(
      ofType(setNewUser),
      mergeMap(({ newUser }) =>
        this.usersService.createNewUserAsync(newUser).pipe(
          withLoading(this.store),
          map((userRes: iApiResponseModel<string>) =>
            setSuccess({ success: userRes.message })
          ),
          catchError((response: HttpErrorResponse) =>
            of(setError({ error: response.error.message }))
          )
        )
      )
    )
  );
  setNewUserSuccess = createEffect(() =>
    this.actions$.pipe(
      ofType(setNewUserSuccess),
      tap(() => this.store.dispatch(getAllUsers())),
      map(({ message }) => setSuccess({ success: message }))
    )
  );

  getAllSubscriptions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllSubscriptions),
      mergeMap(({ uuid }) =>
        this.usersService.getAllSubscriptionsAsync(uuid).pipe(
          withLoading(this.store),
          map((userRes: iApiResponseModel<iUser>) =>
            setAllSubscriptionsSuccess({ allSubscriptions: userRes.data })
          ),
          catchError((response: HttpErrorResponse) =>
            of(
              setError({ error: response.error.message }),
              setAllSubscriptionsError({ error: true })
            )
          )
        )
      )
    )
  );

  setNewSubscription$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setNewSubscription),
      switchMap(({ sponsorUuid, newStaff }) =>
        this.usersService
          .createNewSubscriptionAsync(sponsorUuid, newStaff)
          .pipe(
            withLoading(this.store),
            map((userRes: iApiResponseModel<string>) =>
              setNewSubscriptionSuccess({
                message: userRes.message,
                sponsorUuid: sponsorUuid,
              })
            ),
            catchError((response: HttpErrorResponse) =>
              of(setError({ error: response.error.message }))
            )
          )
      )
    )
  );
  setNewSubscriptionSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setNewSubscriptionSuccess),
      tap(({ sponsorUuid }) =>
        this.store.dispatch(getAllSubscriptions({ uuid: sponsorUuid }))
      ),
      map(({ message }) => setSuccess({ success: message }))
    )
  );
}
