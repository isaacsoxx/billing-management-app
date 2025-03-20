import { iUser } from '../models';

export interface UserState {
  selectedUser: iUser | null;
}

export const initialState: UserState = {
  selectedUser: null,
};
