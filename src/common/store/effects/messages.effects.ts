import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { setError, setSuccess } from '../actions';
import { switchMap, tap } from 'rxjs';
import { NgToastService } from 'ng-angular-popup';

@Injectable()
export class MessagesEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private toastService: NgToastService
  ) {}

  setError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setError),
        tap(({ error }) => {
          this.toastService.danger(error, 'Error', 4000);
        })
      ),
    { dispatch: false }
  );

  setSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setSuccess),
        tap(({ success }) => {
          this.toastService.success(success, 'Sucess', 4000);
        })
      ),
    { dispatch: false }
  );
}
