import { createReducer, on } from '@ngrx/store';
import {
  initialState,
  removeAuthSessionSuccess,
  setAuthSessionError,
  setAuthSessionSuccess,
} from '..';

export const authReducer = createReducer(
  initialState,
  on(setAuthSessionSuccess, (state, { session }) => ({
    ...state,
    session,
  })),
  on(removeAuthSessionSuccess, () => initialState),
  on(setAuthSessionError, (state, { error }) => ({
    ...state,
    error,
  }))
);
