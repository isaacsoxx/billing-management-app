import { createReducer, on } from '@ngrx/store';
import { setIsLoading } from '../actions/spinner.actions';

export interface SpinnerState {
  isLoading: boolean;
}

export const initialSpinnerState: SpinnerState = {
  isLoading: false,
};

export const spinnerReducer = createReducer(
  initialSpinnerState,
  on(setIsLoading, (state, { isLoading }) => ({
    ...state,
    isLoading,
  }))
);
