import { createReducer, on } from '@ngrx/store';
import { iGenericModalContent } from '../../models';
import {
  resetModalState,
  setModalActionStatus,
  setModalContent,
} from '../actions';

export interface ModalState {
  content: iGenericModalContent | null;
  actionStatus: boolean;
}

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
