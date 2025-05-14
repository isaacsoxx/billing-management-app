import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { iGenericModalContent, selectModalContent } from '../..';

@Component({
  selector: 'app-generic-modal',
  standalone: false,

  templateUrl: './generic-modal.component.html',
  styleUrl: './generic-modal.component.scss',
})
export class GenericModalComponent {
  @ViewChild('genericModalTemplate')
  private genericModalTemplate!: TemplateRef<GenericModalComponent>;
  public modalContent$: Observable<iGenericModalContent | null> = of(null);

  constructor(private dialogRef: MatDialog, private store: Store) {}

  openGenericModalComponent() {
    this.getModalContent();

    return this.dialogRef.open(this.genericModalTemplate, {
      width: '80%',
    });
  }

  getModalContent() {
    this.modalContent$ = this.store.select(selectModalContent);
  }
}
