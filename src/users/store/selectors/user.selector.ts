import { createFeatureSelector, createSelector } from '@ngrx/store';
import { iUsersState } from '../users.state';

export const selectUserState = createFeatureSelector<iUsersState>('users');
export const getSelectedUser = createSelector(
  selectUserState,
  (state) => state.selectedUser
);
