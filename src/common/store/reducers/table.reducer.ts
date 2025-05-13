import { createReducer, on } from '@ngrx/store';
import { iGenericRowModel } from '../../models';
import { setSelectRow } from '../actions/table.actions';

export interface TableState {
  selectedRow: iGenericRowModel | null;
}

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
