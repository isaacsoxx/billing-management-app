import { iSessionModel } from '.';

export interface iAuthState {
  session: iSessionModel | null;
  error: string;
}
