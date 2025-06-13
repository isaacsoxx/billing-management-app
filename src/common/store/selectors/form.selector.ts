import { createFeatureSelector, createSelector } from '@ngrx/store';
import { iGenericState } from '../../models';

export const selectFormState = createFeatureSelector<iGenericState>('common');
export const selectFormValid = createSelector(
  selectFormState,
  (state) => state.form.isValid
);
export const selectFormValue = createSelector(
  selectFormState,
  (state) => state.form.value
);
