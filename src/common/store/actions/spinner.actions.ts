import { createAction, props } from '@ngrx/store';

export const setIsLoading = createAction(
  '[Spinner] Set Loading',
  props<{ isLoading: boolean }>()
);
