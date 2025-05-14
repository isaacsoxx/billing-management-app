import { createAction, props } from '@ngrx/store';
import { iGenericModalContent } from '../../models';

export const setModalData = createAction(
  '[Modal] Set Content',
  props<{ content: iGenericModalContent | null }>()
);
