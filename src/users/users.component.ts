import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import {
  GenericModalComponent,
  iGenericModalActionTypes,
  setModalData,
} from '../common';
import { UserFormComponent } from './components';

@Component({
  selector: 'app-users',
  standalone: false,

  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  @ViewChild('usersForm')
  private usersForm!: UserFormComponent;
  @ViewChild('usersFormModal')
  private usersFormModal!: GenericModalComponent;
  private usersFormModalRef!: MatDialogRef<GenericModalComponent>;
  private getIsFormValid$: Subscription = new Subscription();
  private isSaveEnabled: boolean = false;

  constructor(private store: Store) {}

  setModalData() {
    this.store.dispatch(
      setModalData({
        content: {
          title: 'Registrar cliente',
          actionButtons: this.setModalActionButtons(),
        },
      })
    );
  }

  openGenericFormModal() {
    this.setModalData();
    this.usersFormModalRef = this.usersFormModal.openGenericModalComponent();
    this.setSaveEnabled();
  }

  setModalActionButtons() {
    return [
      {
        displayName: 'Registrar',
        type: iGenericModalActionTypes.SUBMIT,
        isDisabled: !this.isSaveEnabled,
        action: this.saveClient.bind(this),
      },
      {
        displayName: 'Cancelar',
        type: iGenericModalActionTypes.CANCEL,
        isDisabled: false,
        action: this.closeDialog.bind(this),
      },
    ];
  }

  saveClient() {
    console.log(this.usersForm.getFormValue());
    this.closeDialog();
  }

  closeDialog() {
    this.usersFormModalRef.close();
    this.resetModalData();
  }

  setSaveEnabled() {
    this.getIsFormValid$ = this.usersForm
      .getIsFormValid$()
      .subscribe((isValid: boolean) => {
        this.isSaveEnabled = isValid;
        this.setModalData();
      });
  }

  resetModalData() {
    this.usersForm.ngOnDestroy();
    this.store.dispatch(setModalData({ content: null }));
    this.getIsFormValid$.unsubscribe();
  }
}
