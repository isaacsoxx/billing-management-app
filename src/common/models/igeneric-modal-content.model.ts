export interface iGenericModalContent {
  title: string;
  actionButtons: iGenericModalButton[];
}

export interface iGenericModalButton {
  displayName: string;
  type: iGenericModalActionTypes;
  isDisabled: boolean;
  action: () => void;
}

export enum iGenericModalActionTypes {
  SUBMIT = 'primary',
  CANCEL = 'secondary',
}
