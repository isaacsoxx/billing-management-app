import { createReducer, on } from '@ngrx/store';
import { initialState } from '../auth.state';
import {
  removeAuthSessionSuccess,
  setAuthSessionError,
  setAuthSessionSuccess,
} from '../actions/auth.actions';

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
