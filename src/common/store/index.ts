import { ActionReducerMap } from '@ngrx/store';
import { iGenericState } from './generic.state';
import { tableReducer } from './reducers/table.reducer';
import { spinnerReducer } from './reducers/spinner.reducer';

export * from './generic.state';
export * from './actions/spinner.actions';
export * from './actions/table.actions';
export * as SpinnerSelectors from './selectors/spinner.selector';
export * as TableSelectors from './selectors/table.selector';

export const reducers: ActionReducerMap<iGenericState> = {
  table: tableReducer,
  spinner: spinnerReducer,
};
