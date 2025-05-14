import { ActionReducerMap } from '@ngrx/store';
import { iGenericState } from './generic.state';
import { modalReducer, spinnerReducer, tableReducer } from './reducers';

export * from './generic.state';
export * from './actions';
export * from './selectors';

export const reducers: ActionReducerMap<iGenericState> = {
  table: tableReducer,
  spinner: spinnerReducer,
  modal: modalReducer,
};
