import { initialSpinnerState, SpinnerState } from './reducers/spinner.reducer';
import { initialTableState, TableState } from './reducers/table.reducer';

export interface iGenericState {
  table: TableState;
  spinner: SpinnerState;
}

export const initialState: iGenericState = {
  table: initialTableState,
  spinner: initialSpinnerState,
};
