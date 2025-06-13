import { iGenericState } from '../models';
import {
  initialFormState,
  initialMessagesState,
  initialModalState,
  initialSpinnerState,
} from './reducers';

export const initialState: iGenericState = {
  messages: initialMessagesState,
  spinner: initialSpinnerState,
  modal: initialModalState,
  form: initialFormState,
};
