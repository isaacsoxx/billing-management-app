import { createFeatureSelector, createSelector } from '@ngrx/store';
import { iUsersState } from '../../models';

export const selectUserState = createFeatureSelector<iUsersState>('users');
export const selectUserDetails = createSelector(
  selectUserState,
  (state) => state.selectedUser
);
export const selectAllUsers = createSelector(
  selectUserState,
  (state) => state.allUsers
);
export const selectAllUsersError = createSelector(
  selectUserState,
  (state) => state.allUsersError
);
export const selectAllSubscriptions = createSelector(
  selectUserState,
  (state) => state.allUsers
);
export const selectAllSubscriptionsError = createSelector(
  selectUserState,
  (state) => state.allUsersError
);
