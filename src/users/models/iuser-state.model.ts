import { iUser } from '.';

export interface iUsersState {
  selectedUser: iUser | null;
  allSubscriptions: iUser[];
  allSubscriptionsError: boolean;
  allUsers: iUser[];
  allUsersError: boolean;
}
