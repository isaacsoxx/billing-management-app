import { iGenericModalContent, iGenericRowModel, iGenericTableKeys } from '.';

export interface iGenericState {
  messages: iMessagesState;
  spinner: iSpinnerState;
  modal: iModalState;
  form: iFormState;
  table: iTableState;
}

export interface iMessagesState {
  error: string;
  success: string;
}

export interface iFormState {
  isValid: boolean;
  value: any;
}

export interface iModalState {
  content: iGenericModalContent | null;
  actionStatus: boolean;
}

export interface iSpinnerState {
  isLoading: boolean;
}

export interface iTableState {
  dataSourceKey: iGenericTableKeys | null;
}
