export interface iGenericFormFieldModel {
    displayName: string;
    controlName: string;
    validationMessages: iGenericFormFieldValidation[];
    type: iGenericFormFieldType;
}

export interface iGenericFormFieldValidation {
    type: iGenericFormFieldValidationType;
    message: string;
}

export enum iGenericFormFieldType {
    TEXT = 'text',
    NUMBER = 'number',
    PASSWORD = 'password',
    EMAIL = 'email'
}

export enum iGenericFormFieldValidationType {
    REQUIRED = 'required',
    EMAIL = 'email',
    MINLENGTH = 'minlength',
    MAXLENGTH = 'maxlength',
    PATTERN = 'pattern'
}