import { iUsersState } from '../models';

export const initialState: iUsersState = {
  selectedUser: null,
  allSubscriptions: [],
  allSubscriptionsError: false,
  allUsers: [],
  allUsersError: false,
};
