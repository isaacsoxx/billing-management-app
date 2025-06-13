import { createReducer, on } from '@ngrx/store';
import { setIsLoading } from '../actions/spinner.actions';
import { iSpinnerState } from '../../models';

export const initialSpinnerState: iSpinnerState = {
  isLoading: false,
};

export const spinnerReducer = createReducer(
  initialSpinnerState,
  on(setIsLoading, (state, { isLoading }) => ({
    ...state,
    isLoading,
  }))
);
