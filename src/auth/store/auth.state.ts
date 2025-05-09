import { iSessionModel } from '../models';

export interface iAuthState {
  session: iSessionModel | null;
  error: string;
}

export const initialState: iAuthState = {
  session: null,
  error: '',
};
