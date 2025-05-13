import { createAction, props } from '@ngrx/store';
import { iGenericRowModel } from '../../models';

export const setSelectRow = createAction(
  '[Table] Select Row',
  props<{ row: iGenericRowModel }>()
);
