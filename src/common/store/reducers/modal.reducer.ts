import { createReducer, on } from '@ngrx/store';
import {
  resetModalState,
  setModalActionStatus,
  setModalContent,
} from '../actions';
import { iModalState } from '../../models';

export const initialModalState: iModalState = {
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
