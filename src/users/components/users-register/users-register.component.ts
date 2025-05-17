import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';
import {
  GenericModalComponent,
  selectFormValid,
  setModalActionStatus,
  setModalContent,
} from '../../../common';

@Component({
  selector: 'app-users-register',
  standalone: false,

  templateUrl: './users-register.component.html',
  styleUrl: './users-register.component.scss',
})
export class UsersRegisterComponent {
  @ViewChild('usersFormModal')
  private usersFormModal!: GenericModalComponent;
  private isformValid$: Subscription = new Subscription();

  constructor(private store: Store) {}

  openGenericFormModal() {
    this.setModalContent();
    this.selectFormValid();
    this.setModalActionStatus();
    this.usersFormModal.openGenericModalComponent();
  }

  selectFormValid() {
    this.isformValid$ = this.store
      .select(selectFormValid)
      .pipe(tap((isValid) => this.setModalActionStatus(isValid)))
      .subscribe();
  }

  setModalActionStatus(status?: boolean) {
    this.store.dispatch(
      setModalActionStatus({ actionStatus: status ?? false })
    );
  }

  setModalContent() {
    this.store.dispatch(
      setModalContent({
        content: {
          title: 'Registrar cliente',
          submitDisplayText: 'Registar',
          cancelDisplayText: 'Cancelar',
          onSubmit: () => this.saveClient(),
          onCancel: () => this.closeDialog(),
        },
      })
    );
  }

  saveClient() {
    this.closeDialog();
  }

  closeDialog() {
    this.usersFormModal.close();
    this.isformValid$.unsubscribe();
  }
}
