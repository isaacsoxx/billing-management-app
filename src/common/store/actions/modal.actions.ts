import { createAction, props } from '@ngrx/store';
import { iGenericModalContent } from '../../models';
import { ModalState } from '../reducers';

export const resetModalState = createAction('[Modal] Reset State');
export const setModalContent = createAction(
  '[Modal] Set Content',
  props<{ content: iGenericModalContent }>()
);
export const setModalActionStatus = createAction(
  '[Modal] Set Action Status',
  props<{ actionStatus: boolean }>()
);
