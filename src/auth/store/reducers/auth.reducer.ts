import { createReducer, on } from '@ngrx/store';
import { initialState } from '../auth.state';
import {
  removeAuthSessionSuccess,
  setAuthSessionError,
  setAuthSessionSuccess,
  setMfaVerificationStep,
  setSignInStep,
  setTrustedDeviceSuccess,
} from '../actions/auth.actions';

export const authReducer = createReducer(
  initialState,
  on(setSignInStep, (state, { signInStep }) => ({
    ...state,
    signInStep: signInStep,
  })),
  on(setMfaVerificationStep, (state, { mfaVerificationStep }) => ({
    ...state,
    mfaVerificationStep: mfaVerificationStep,
  })),
  on(setTrustedDeviceSuccess, (state, { deviceKey }) => ({
    ...state,
    trustedDeviceKey: deviceKey,
  })),
  on(setTrustedDeviceSuccess, (state, { deviceKey }) => ({
    ...state,
    trustedDeviceKey: deviceKey,
  })),
  on(setAuthSessionSuccess, (state, { session }) => ({
    ...state,
    session: { ...session },
  })),
  on(removeAuthSessionSuccess, () => initialState),
  on(setAuthSessionError, (state, { error }) => ({
    ...state,
    error,
  })),
);
