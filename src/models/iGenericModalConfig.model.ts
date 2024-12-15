export interface iGenericModalConfig {
    title: string;
    content: any;
    actionButtons: iGenericModalAction[]
}

export interface iGenericModalAction {
    displayName: string;
    type: iGenericModalActionTypes;
    action: () => void;
}

export enum iGenericModalActionTypes {
    SUBMIT = 'primary',
    CANCEL = 'secondary'
}