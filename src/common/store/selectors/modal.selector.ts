import { createFeatureSelector, createSelector } from '@ngrx/store';
import { iGenericState } from '../generic.state';

export const selectModalState = createFeatureSelector<iGenericState>('common');
export const selectModalContent = createSelector(
  selectModalState,
  (state) => state.modal.content
);
