import { createFeatureSelector, createSelector } from '@ngrx/store';
import { iGenericState } from '../../models';

export const selectSpinnerState =
  createFeatureSelector<iGenericState>('common');
export const selectIsLoading = createSelector(
  selectSpinnerState,
  (state) => state.spinner.isLoading
);
