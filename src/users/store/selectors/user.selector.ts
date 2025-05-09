import { createFeatureSelector, createSelector } from '@ngrx/store';
import { iUserState } from '../';

export const selectUserState = createFeatureSelector<iUserState>('users');
export const getSelectedUser = createSelector(
  selectUserState,
  (state) => state.selectedUser
);
