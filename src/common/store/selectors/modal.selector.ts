import { createFeatureSelector, createSelector } from '@ngrx/store';
import { iGenericState } from '../../models';

export const selectModalState = createFeatureSelector<iGenericState>('common');
export const selectModalContent = createSelector(
  selectModalState,
  (state) => state.modal.content
);
export const selectModalActionStatus = createSelector(
  selectModalState,
  (state) => state.modal.actionStatus
);
