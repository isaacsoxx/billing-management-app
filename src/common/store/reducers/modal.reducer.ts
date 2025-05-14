import { createReducer, on } from '@ngrx/store';
import { iGenericModalContent } from '../../models';
import { setModalData } from '../actions';

export interface ModalState {
  content: iGenericModalContent | null;
}

export const initialModalState: ModalState = {
  content: null,
};

export const modalReducer = createReducer(
  initialModalState,
  on(setModalData, (state, { content }) => ({
    ...state,
    content,
  }))
);
