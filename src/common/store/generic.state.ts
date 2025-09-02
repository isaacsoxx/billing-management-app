import { iGenericState } from '../models';
import {
  initialFormState,
  initialMessagesState,
  initialModalState,
  initialSpinnerState,
} from './reducers';
import { initialTableState } from './reducers/table.reducer';

export const initialState: iGenericState = {
  messages: initialMessagesState,
  spinner: initialSpinnerState,
  modal: initialModalState,
  form: initialFormState,
  table: initialTableState,
};
