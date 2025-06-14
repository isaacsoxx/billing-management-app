import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { iApiResponseModel, setError, withLoading } from '../../../common';
import { UsersService } from '../../services/users.service';
import {
  getAllSubscriptions,
  getAllUsers,
  setAllSubscriptionsError,
  setAllSubscriptionsSuccess,
  setAllUsersError,
  setAllUsersSuccess,
} from '../actions/users.actions';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { iUser } from '../../models';

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
}
