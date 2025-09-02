import { createAction, props } from '@ngrx/store';
import { iStaff, iUser } from '../../models';

export const setUserDetails = createAction(
  '[Users] Set user details',
  props<{ user: iUser | null }>()
);

export const getAllUsers = createAction('[Users] Get all users');
export const setAllUsersSuccess = createAction(
  '[Users] Set all users success',
  props<{ allUsers: iUser[] }>()
);
export const setAllUsersError = createAction(
  '[Users] Set all users error',
  props<{ error: boolean }>()
);
export const setNewUser = createAction(
  '[Users] Set new user',
  props<{ newUser: iUser }>()
);

export const setNewUserSuccess = createAction(
  '[Users] Set new user success',
  props<{ message: string }>()
);

export const getAllSubscriptions = createAction(
  '[Users] Get all admin subscriptions',
  props<{ uuid: string }>()
);
export const setAllSubscriptionsSuccess = createAction(
  '[Users] Set all admin subscriptions success',
  props<{ allSubscriptions: iUser[] }>()
);
export const setAllSubscriptionsError = createAction(
  '[Users] Set all admin subscriptions error',
  props<{ error: boolean }>()
);

export const setNewSubscription = createAction(
  '[Users] Set new subscription',
  props<{ sponsorUuid: string; newStaff: iStaff }>()
);
export const setNewSubscriptionSuccess = createAction(
  '[Users] Set new subscription success',
  props<{ message: string; sponsorUuid: string }>()
);
