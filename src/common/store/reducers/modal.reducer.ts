import { createReducer, on } from '@ngrx/store';
import { ModalState } from '../../models';
import {
  resetModalState,
  setModalActionStatus,
  setModalContent,
} from '../actions';

export const initialModalState: ModalState = {
  content: null,
  actionStatus: true,
};

export const modalReducer = createReducer(
  initialModalState,
  on(resetModalState, () => initialModalState),
  on(setModalContent, (state, { content }) => ({
    ...state,
    content,
  })),
  on(setModalActionStatus, (state, { actionStatus }) => ({
    ...state,
    actionStatus,
  }))
);
