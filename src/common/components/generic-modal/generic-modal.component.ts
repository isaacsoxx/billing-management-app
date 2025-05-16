import { Component, ContentChild, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  GenericModalTemplateComponent,
  iGenericModalContent,
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
  @ContentChild(TemplateRef)
  public templateContentRef: any;
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
        templateContent: this.templateContentRef,
        modalContent$: this.modalContent$,
        actionStatus$: this.modalActionStatus$,
      },
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
