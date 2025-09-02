import { createFeatureSelector, createSelector } from '@ngrx/store';
import { iGenericState } from '../../models';

export const selectTableState = createFeatureSelector<iGenericState>('common');
export const selectDataSourceKey = createSelector(
  selectTableState,
  (state) => state.table.dataSourceKey
);
