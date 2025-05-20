import { Component, Inject, TemplateRef } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { iGenericModalContent, iGenericModalContext } from '../../models';

@Component({
  selector: 'app-generic-modal-template',
  standalone: false,

  templateUrl: './generic-modal-template.component.html',
  styleUrl: './generic-modal-template.component.scss',
})
export class GenericModalTemplateComponent {
  public modalContent$: Observable<iGenericModalContent | null> = of(null);
  public modalActionStatus$: Observable<boolean> = of(false);
  public originTemplate!: TemplateRef<Component>;

  constructor(@Inject(MAT_DIALOG_DATA) data: iGenericModalContext) {
    this.modalContent$ = data.modalContent$;
    this.modalActionStatus$ = data.modalActionStatus$;
    this.originTemplate = data.modalContentTemplate;
  }
}
