import { Component, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';

export interface iGenericModalContent {
  title: string;
  submitDisplayText: string;
  cancelDisplayText: string;
  onSubmit: () => void;
  onCancel: () => void;
}

export interface iGenericModalContext {
  modalContent$: Observable<iGenericModalContent | null>;
  modalActionStatus$: Observable<boolean>;
  modalContentTemplate: TemplateRef<any>;
}
