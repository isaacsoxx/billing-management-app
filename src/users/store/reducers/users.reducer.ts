import { createReducer, on } from '@ngrx/store';
import { initialState } from '../users.state';
import {
  setSelectedUser,
  setAllUsersSuccess,
  setAllUsersError,
  setAllSubscriptionsSuccess,
  setAllSubscriptionsError,
} from '../actions/users.actions';

export const userReducer = createReducer(
  initialState,
  on(setSelectedUser, (state, { user }) => ({
    ...state,
    selectedUser: user,
  })),
  on(setAllUsersSuccess, (state, { allUsers }) => ({
    ...state,
    allUsers,
  })),
  on(setAllUsersError, (state, { error }) => ({
    ...state,
    allUsersApiError: error,
  })),
  on(setAllSubscriptionsSuccess, (state, { allSubscriptions }) => ({
    ...state,
    allSubscriptions,
  })),
  on(setAllSubscriptionsError, (state, { error }) => ({
    ...state,
    allSubscriptionsError: error,
  }))
);
