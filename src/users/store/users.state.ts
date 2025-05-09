import { iUser } from '../models';

export interface iUserState {
  selectedUser: iUser | null;
}

export const initialState: iUserState = {
  selectedUser: null,
};
