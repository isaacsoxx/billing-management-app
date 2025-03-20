import { createAction, props } from '@ngrx/store';
import { iUser } from '../../models';

export const selectUser = createAction(
  '[User] Select User',
  props<{ user: iUser }>()
);
