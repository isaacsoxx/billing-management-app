import { createAction, props } from '@ngrx/store';
import { iSessionModel } from '../../models';

export const getAuthSession = createAction('[Auth] Get session');
export const setAuthSessionSuccess = createAction(
  '[Auth] Set session success',
  props<{ session: iSessionModel }>()
);
export const setAuthSessionError = createAction(
  '[Auth] Set session error',
  props<{ error: string }>()
);
export const removeAuthSession = createAction('[Auth] Remove session');
export const removeAuthSessionSuccess = createAction(
  '[Auth] Remove session success'
);
export const removeAuthSessionError = createAction(
  '[Auth] Remove session error'
);
