import { createFeatureSelector, createSelector } from '@ngrx/store';
import { iGenericState } from '../../models';

export const selectMessagesState =
  createFeatureSelector<iGenericState>('common');
export const selectError = createSelector(
  selectMessagesState,
  (state) => state.messages.error
);
export const selectSuccess = createSelector(
  selectMessagesState,
  (state) => state.messages.success
);
