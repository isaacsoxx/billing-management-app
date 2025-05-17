import { createFeatureSelector, createSelector } from '@ngrx/store';
import { iAuthState } from '../../models';

export const selectAuthState = createFeatureSelector<iAuthState>('auth');
export const selectAuthSession = createSelector(
  selectAuthState,
  (state: iAuthState) => state.session
);
export const selectAuthSessionError = createSelector(
  selectAuthState,
  (state: iAuthState) => state.error
);
