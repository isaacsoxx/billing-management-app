import { ActionReducerMap } from '@ngrx/store';
import {
  formReducer,
  messagesReducer,
  modalReducer,
  spinnerReducer,
} from './reducers';
import { iGenericState } from '../models';

export * from './generic.state';
export * from './actions';
export * from './selectors';

export const reducers: ActionReducerMap<iGenericState> = {
  messages: messagesReducer,
  spinner: spinnerReducer,
  modal: modalReducer,
  form: formReducer,
};
