export interface iGenericFormFieldModel {
    displayName: string;
    controlName: string;
    type: iGenericFormFieldType;
}

export enum iGenericFormFieldType {
    TEXT = 'text',
    NUMBER = 'number',
    PASSWORD = 'password',
    EMAIL = 'email'
}