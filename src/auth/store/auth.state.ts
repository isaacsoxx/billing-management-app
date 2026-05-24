import { iAuthState } from '../models';

export const initialState: iAuthState = {
  signInStep: true,
  mfaVerificationStep: false,
  session: null,
  error: '',
  trustedDeviceKey: '',
};
