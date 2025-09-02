import { createAction, props } from '@ngrx/store';
import { iGenericTableKeys } from '../../models';

export const setDataSourceKey = createAction(
  '[Table] Set data source key',
  props<{ dataSourceKey: iGenericTableKeys | null }>()
);

export const resetDataSourceKey = createAction('[Table] Reset data source key');
