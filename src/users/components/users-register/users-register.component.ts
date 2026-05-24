import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, firstValueFrom, Subscription, tap } from 'rxjs';
import { selectAuthSession } from '../../../auth';
import {
  GenericModalComponent,
  selectFormValid,
  selectFormValue,
  setModalActionStatus,
  setModalContent,
} from '../../../common';
import { iStaff, iUser } from '../../models';
import { setNewSubscription, setNewUser } from '../../store';

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

  constructor(private readonly store: Store) {}

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
          title: 'Registrar usuario',
          submitDisplayText: 'Registar',
          cancelDisplayText: 'Cancelar',
          onSubmit: () => this.saveClient(),
          onCancel: () => this.closeDialog(),
        },
      })
    );
  }

  saveClient() {
    this.createUser();
    this.closeDialog();
  }

  closeDialog() {
    this.usersFormModal.close();
    this.isformValid$.unsubscribe();
  }

  async createUser() {
    const baseUserData = await firstValueFrom(
      this.store.select(selectFormValue).pipe(filter(Boolean))
    );

    await this.registerUserByRole(baseUserData);
  }

  async registerUserByRole(baseUserData: Partial<iUser>) {
    const activeUserSession = await this.getActiveUserSession();

    switch (activeUserSession.role) {
      case 'maintainer':
        this.dispatchNewUser(baseUserData);
        break;

      case 'admin':
        this.dispatchNewSubscription(activeUserSession.uuid, baseUserData);

        break;

      default:
        break;
    }
  }

  dispatchNewUser(baseUserData: Partial<iUser>) {
    this.store.dispatch(
      setNewUser({ newUser: { ...baseUserData, isActive: true } as iUser })
    );
  }

  dispatchNewSubscription(sponsorUuid: string, baseUserData: Partial<iStaff>) {
    const newStaff = {
      ...baseUserData,
      role: 'staff',
      isActive: true,
    } as iStaff;

    this.store.dispatch(
      setNewSubscription({
        sponsorUuid: sponsorUuid,
        newStaff,
      })
    );
  }

  async getActiveUserSession() {
    return await firstValueFrom(
      this.store.select(selectAuthSession).pipe(filter(Boolean))
    );
  }
}
