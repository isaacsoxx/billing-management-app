import { iGenericRowModel } from '../models';

export interface TableState {
  selectedRow: iGenericRowModel | null;
}

export const initialState: TableState = {
  selectedRow: null,
};
