import { iGenericModalContent, iGenericRowModel } from '.';

export interface FormState {
  isValid: boolean;
  value: any;
}

export interface ModalState {
  content: iGenericModalContent | null;
  actionStatus: boolean;
}

export interface SpinnerState {
  isLoading: boolean;
}

export interface TableState {
  selectedRow: iGenericRowModel | null;
}
