import { Component, Inject, TemplateRef } from '@angular/core';
import { iGenericModalContent } from '../../models';
import { Observable, of } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-generic-modal-template',
  standalone: false,

  templateUrl: './generic-modal-template.component.html',
  styleUrl: './generic-modal-template.component.scss',
})
export class GenericModalTemplateComponent {
  public modalContent$: Observable<iGenericModalContent | null> = of(null);
  public modalActionStatus$: Observable<boolean> = of(false);
  public originTemplate!: TemplateRef<any>;

  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.modalContent$ = data.modalContent$;
    this.modalActionStatus$ = data.actionStatus$;
    this.originTemplate = data.templateContent;
  }
}
