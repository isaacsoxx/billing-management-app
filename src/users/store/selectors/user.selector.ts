import { createFeatureSelector, createSelector } from '@ngrx/store';
import { iUsersState } from '../../models';

export const selectUserState = createFeatureSelector<iUsersState>('users');
export const getSelectedUser = createSelector(
  selectUserState,
  (state) => state.selectedUser
);
