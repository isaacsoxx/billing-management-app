export interface iGenericFormFieldModel {
  displayName: string;
  controlName: string;
  validationMessages: iGenericFormFieldValidation[];
  type: iGenericFormFieldType;
  options?: string[];
  mask?: iGenericFormFieldMask;
}

export interface iGenericFormFieldValidation {
  type: iGenericFormFieldValidationType;
  message: string;
}

export interface iGenericFormFieldMask {
  mask: string;
  prefix: string;
  showMaskTyped: boolean;
  dropSpecialCharacters: boolean;
}

export enum iGenericFormFieldType {
  TEXT = 'text',
  SELECT = 'select',
  NUMBER = 'number',
  PASSWORD = 'password',
  EMAIL = 'email',
}

export enum iGenericFormFieldValidationType {
  REQUIRED = 'required',
  EMAIL = 'email',
  MINLENGTH = 'minlength',
  MAXLENGTH = 'maxlength',
  PATTERN = 'pattern',
  MASK = 'mask',
}
