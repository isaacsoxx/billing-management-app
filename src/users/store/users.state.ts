import { iUser } from '../models';

export interface iUsersState {
  selectedUser: iUser | null;
}

export const initialState: iUsersState = {
  selectedUser: null,
};
