import { createAction, props } from '@ngrx/store';
import { iDeviceTrustDto, iSessionModel } from '../../models';

export const storeDeviceKey = createAction(
  '[Auth] Store device key',
  props<{ deviceKey: string }>(),
);

export const setSignInStep = createAction(
  '[Auth] Set sign in step',
  props<{ signInStep: boolean }>(),
);

export const setMfaVerificationStep = createAction(
  '[Auth] Set MFA verification step',
  props<{ mfaVerificationStep: boolean }>(),
);

export const setTrustedDeviceKey = createAction(
  '[Auth] Set storage device key',
);

export const setTrustedDeviceSuccess = createAction(
  '[Auth] Set trusted device success',
  props<{ deviceKey: string }>(),
);

export const registerTrustDevice = createAction(
  '[Auth] Register trust device',
  props<{ deviceKey: iDeviceTrustDto }>(),
);

export const getAuthSession = createAction('[Auth] Get session');
export const setAuthSessionSuccess = createAction(
  '[Auth] Set session success',
  props<{ session: iSessionModel }>(),
);
export const setAuthSessionError = createAction(
  '[Auth] Set session error',
  props<{ error: string }>(),
);
export const removeAuthSession = createAction('[Auth] Remove session');
export const removeAuthSessionSuccess = createAction(
  '[Auth] Remove session success',
);
export const removeAuthSessionError = createAction(
  '[Auth] Remove session error',
);
