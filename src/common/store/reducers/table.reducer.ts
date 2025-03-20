import { createReducer, on } from '@ngrx/store';
import { initialState } from '../table.state';
import { selectRow } from '../actions/table.actions';

export const tableReducer = createReducer(
  initialState,
  on(selectRow, (state, { row }) => ({
    ...state,
    selectedRow: row,
  }))
);
