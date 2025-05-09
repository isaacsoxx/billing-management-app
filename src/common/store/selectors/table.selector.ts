import { createFeatureSelector, createSelector } from '@ngrx/store';
import { iGenericState } from '../generic.state';

export const selectTableState = createFeatureSelector<iGenericState>('common');
export const getSelectedRow = createSelector(
  selectTableState,
  (state) => state.table
);
