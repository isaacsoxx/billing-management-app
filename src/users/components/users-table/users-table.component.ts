import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Action, MemoizedSelector, Selector, Store } from '@ngrx/store';
import { iGenericRowModel, iGenericTableColumnsModel } from '../../../common';
import { iUser, iUsersState } from '../../models';

import { map, Observable } from 'rxjs';
import {
  selectAllUsersError,
  setSelectedUser,
  getAllSubscriptions,
  getAllUsers,
  selectAllUsers,
  selectAllSubscriptions,
  selectAllSubscriptionsError,
} from '../../store';
import {
  getAuthSession,
  iSessionModel,
  selectAuthSession,
} from '../../../auth';

@Component({
  selector: 'app-users-table',
  standalone: false,

  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.scss',
})
export class UsersTableComponent implements OnInit {
  public dataSource$!: Observable<iUser[]>;
  public dataSourceError$!: Observable<boolean>;
  public dataColumns: iGenericTableColumnsModel[] = [
    { columnDef: 'uuid', displayName: 'Cédula' },
    { columnDef: 'firstName', displayName: 'Nombre' },
    { columnDef: 'lastName', displayName: 'Apellido' },
    { columnDef: 'phoneNumber', displayName: 'Número Telefónico' },
  ];
  private tableDataAction!: () => Action;
  private tableDataSelector!: MemoizedSelector<iUsersState, iUser[]>;
  private tableDataErrorSelector!: MemoizedSelector<iUsersState, boolean>;
  private unauthorizedRole: boolean = false;

  constructor(private router: Router, private store: Store<iUsersState>) {}

  ngOnInit(): void {
    this.validateRoleResources().subscribe();
    if (!this.unauthorizedRole) {
      this.store.dispatch(this.tableDataAction);
      this.dataSource$ = this.store.select(this.tableDataSelector);
      this.dataSourceError$ = this.store.select(this.tableDataErrorSelector);
    }
  }

  validateRoleResources() {
    return this.store.select(selectAuthSession).pipe(
      map((session: iSessionModel | null) => {
        switch (session?.role) {
          case 'maintainer':
            this.tableDataAction = () => getAllUsers();
            this.tableDataSelector = selectAllUsers;
            this.tableDataErrorSelector = selectAllUsersError;
            break;
          case 'admin':
            this.tableDataAction = () =>
              getAllSubscriptions({ uuid: session.uuid });
            this.tableDataSelector = selectAllSubscriptions;
            this.tableDataErrorSelector = selectAllSubscriptionsError;

            break;
          default:
            this.unauthorizedRole = true;
        }
      })
    );
  }

  redirToProfile(event: iGenericRowModel) {
    this.store.dispatch(setSelectedUser({ user: event as iUser }));
    this.router.navigateByUrl('users/profile');
  }
}
