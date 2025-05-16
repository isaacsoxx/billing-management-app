import {
  initialFormState,
  initialModalState,
  initialTableState,
  initialSpinnerState,
  FormState,
  ModalState,
  TableState,
  SpinnerState,
} from './reducers';

export interface iGenericState {
  table: TableState;
  spinner: SpinnerState;
  modal: ModalState;
  form: FormState;
}

export const initialState: iGenericState = {
  table: initialTableState,
  spinner: initialSpinnerState,
  modal: initialModalState,
  form: initialFormState,
};
