import { createAction, props } from '@ngrx/store';
import { iUser } from '../../models';

export const setSelectedUser = createAction(
  '[Users] Set selected user',
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
