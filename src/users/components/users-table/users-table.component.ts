import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Action, Store } from '@ngrx/store';
import {
  GenericTableService,
  iGenericRowModel,
  iGenericTableColumnsModel,
  iGenericTableKeys,
} from '../../../common';
import { iUser, iUsersState } from '../../models';

import { map, Subscription } from 'rxjs';
import { iSessionModel, selectAuthSession } from '../../../auth';
import { getAllSubscriptions, getAllUsers, setUserDetails } from '../../store';

@Component({
  selector: 'app-users-table',
  standalone: false,

  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.scss',
})
export class UsersTableComponent implements OnInit, OnDestroy {
  @Input('reloadResources')
  public reloadResources: boolean = false;
  private userResources$: Subscription = this.setUsersResources().subscribe();

  public dataColumns: iGenericTableColumnsModel[] = [
    { columnDef: 'uuid', displayName: 'Cédula' },
    { columnDef: 'firstName', displayName: 'Nombre' },
    { columnDef: 'lastName', displayName: 'Apellido' },
    { columnDef: 'phoneNumber', displayName: 'Número Telefónico' },
  ];
  private tableDataAction!: () => Action;
  private unauthorizedRole: boolean = false;

  constructor(
    private readonly genericTableService: GenericTableService,
    private readonly router: Router,
    private readonly store: Store<iUsersState>
  ) {}

  ngOnInit(): void {
    if (!this.unauthorizedRole) {
      this.loadUserResources();
    } else {
      console.error('User unauthorized');
    }
  }

  setUsersResources() {
    return this.store.select(selectAuthSession).pipe(
      map((session: iSessionModel | null) => {
        switch (session?.role) {
          case 'maintainer':
            this.tableDataAction = () => getAllUsers();
            this.genericTableService.setDataSourceStateKey(
              iGenericTableKeys.ALL_USERS
            );
            break;
          case 'admin':
            this.tableDataAction = () =>
              getAllSubscriptions({ uuid: session.uuid });
            this.genericTableService.setDataSourceStateKey(
              iGenericTableKeys.ALL_SUBSCRIPTIONS
            );
            break;
          default:
            this.unauthorizedRole = true;
        }
      })
    );
  }

  loadUserResources() {
    this.store.dispatch(this.tableDataAction);
  }

  redirToProfile(event: iGenericRowModel) {
    this.store.dispatch(setUserDetails({ user: event as iUser }));
    this.router.navigateByUrl('users/profile');
  }

  ngOnDestroy(): void {
    this.userResources$.unsubscribe();
  }
}
