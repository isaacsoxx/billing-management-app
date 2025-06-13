import { createReducer, on } from '@ngrx/store';
import { setFormState } from '../actions';
import { iFormState } from '../../models';

export const initialFormState: iFormState = {
  isValid: false,
  value: null,
};

export const formReducer = createReducer(
  initialFormState,
  on(setFormState, (state, { isValid, value }) => ({
    ...state,
    isValid,
    value,
  }))
);
