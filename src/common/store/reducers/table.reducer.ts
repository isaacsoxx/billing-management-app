import { createReducer, on } from '@ngrx/store';
import { iTableState } from '../../models';
import { resetDataSourceKey, setDataSourceKey } from '../actions/table.actions';

export const initialTableState: iTableState = {
  dataSourceKey: null,
};

export const tableReducer = createReducer(
  initialTableState,
  on(setDataSourceKey, (state, { dataSourceKey }) => ({
    ...state,
    dataSourceKey,
  })),
  on(resetDataSourceKey, (state) => ({
    ...state,
    dataSourceKey: null,
  }))
);
