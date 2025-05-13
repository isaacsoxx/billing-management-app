import { createReducer, on } from '@ngrx/store';
import { initialState } from '../users.state';
import { selectUser } from '../actions/user.actions';

export const userReducer = createReducer(
  initialState,
  on(selectUser, (state, { user }) => ({
    ...state,
    selectedUser: user,
  }))
);
