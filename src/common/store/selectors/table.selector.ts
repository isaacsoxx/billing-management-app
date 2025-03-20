import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TableState } from '../table.state';

export const selectTableState = createFeatureSelector<TableState>('table');
export const getSelectedRow = createSelector(
  selectTableState,
  (state) => state.selectedRow
);
