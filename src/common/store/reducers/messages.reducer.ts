import { createReducer, on } from '@ngrx/store';
import { iMessagesState } from '../../models';
import { setError, setSuccess } from '../actions';

export const initialMessagesState: iMessagesState = {
  error: '',
  success: '',
};

export const messagesReducer = createReducer(
  initialMessagesState,
  on(setError, (state, { error }) => ({
    ...state,
    error,
  })),
  on(setSuccess, (state, { success }) => ({
    ...state,
    success,
  }))
);
