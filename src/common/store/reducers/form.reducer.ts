import { createReducer, on } from '@ngrx/store';
import { setFormState } from '../actions';

export interface FormState {
  isValid: boolean;
  value: any;
}

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
