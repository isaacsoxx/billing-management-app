import { iSessionModel } from '.';

export interface iAuthState {
  signInStep: boolean;
  mfaVerificationStep: boolean;
  session: iSessionModel | null;
  trustedDeviceKey: string;
  error: string;
}
