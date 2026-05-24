import { createFeatureSelector, createSelector } from '@ngrx/store';
import { iAuthState } from '../../models';

export const selectAuthState = createFeatureSelector<iAuthState>('auth');
export const selectSignInStep = createSelector(
  selectAuthState,
  (state: iAuthState) => state.signInStep,
);
export const selectMfaVerificationStep = createSelector(
  selectAuthState,
  (state: iAuthState) => state.mfaVerificationStep,
);
export const selectTrustedDeviceKey = createSelector(
  selectAuthState,
  (state: iAuthState) => state.trustedDeviceKey,
);
export const selectDeviceKey = createSelector(
  selectAuthState,
  (state: iAuthState) => state.session?.deviceKey,
);
export const selectAuthSession = createSelector(
  selectAuthState,
  (state: iAuthState) => state.session,
);
export const selectAuthSessionError = createSelector(
  selectAuthState,
  (state: iAuthState) => state.error,
);
