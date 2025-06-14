import { createAction, props } from '@ngrx/store';

export const setError = createAction(
  '[Messages] Set Error',
  props<{ error: string }>()
);
export const setSuccess = createAction(
  '[Messages] Set Success',
  props<{ success: string }>()
);
