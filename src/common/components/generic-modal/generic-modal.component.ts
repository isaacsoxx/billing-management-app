import { Component, ContentChild, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  GenericModalTemplateComponent,
  iGenericModalContent,
  iGenericModalContext,
  resetModalState,
  selectModalActionStatus,
  selectModalContent,
} from '../..';

@Component({
  selector: 'app-generic-modal',
  standalone: false,

  templateUrl: './generic-modal.component.html',
  styleUrl: './generic-modal.component.scss',
})
export class GenericModalComponent {
  @ViewChild('modalTemplateContent')
  public modalContentTemplate!: TemplateRef<Component>;
  public modalContent$: Observable<iGenericModalContent | null> = of(null);
  public modalActionStatus$: Observable<boolean> = of(true);
  private genericModalRef!: MatDialogRef<GenericModalTemplateComponent>;

  constructor(private dialogRef: MatDialog, private store: Store) {}

  openGenericModalComponent() {
    this.getModalActionStatus();
    this.getModalContent();

    this.genericModalRef = this.dialogRef.open(GenericModalTemplateComponent, {
      width: '80%',
      data: {
        modalContentTemplate: this.modalContentTemplate,
        modalContent$: this.modalContent$,
        modalActionStatus$: this.modalActionStatus$,
      } as iGenericModalContext,
    });
  }

  close() {
    this.store.dispatch(resetModalState());
    this.genericModalRef.close();
  }

  getModalActionStatus() {
    this.modalActionStatus$ = this.store.select(selectModalActionStatus);
  }

  getModalContent() {
    this.modalContent$ = this.store.select(selectModalContent);
  }
}
