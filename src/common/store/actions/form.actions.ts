import { createAction, props } from '@ngrx/store';

export const setFormState = createAction(
  '[Form] Set State',
  props<{ isValid: boolean; value: any }>()
);
