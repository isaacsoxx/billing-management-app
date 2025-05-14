import {
  initialModalState,
  initialTableState,
  ModalState,
  TableState,
} from './reducers';
import { initialSpinnerState, SpinnerState } from './reducers/spinner.reducer';

export interface iGenericState {
  table: TableState;
  spinner: SpinnerState;
  modal: ModalState;
}

export const initialState: iGenericState = {
  table: initialTableState,
  spinner: initialSpinnerState,
  modal: initialModalState,
};
