import { createReducer, on } from '@ngrx/store';
import { setFormState } from '../actions';
import { FormState } from '../../models';

export const initialFormState: FormState = {
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
