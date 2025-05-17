import { createReducer, on } from '@ngrx/store';
import { TableState } from '../../models';
import { setSelectRow } from '../actions/table.actions';

export const initialTableState: TableState = {
  selectedRow: null,
};

export const tableReducer = createReducer(
  initialTableState,
  on(setSelectRow, (state, { row }) => ({
    ...state,
    selectedRow: row,
  }))
);
