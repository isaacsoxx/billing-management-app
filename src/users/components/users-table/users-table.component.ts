import { Component, OnInit } from '@angular/core';
import { iUser } from '../../models';
import { iGenericTableColumnsModel } from '../../../common';

import { Router } from '@angular/router';

@Component({
  selector: 'app-users-table',
  standalone: false,

  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.scss',
})
export class UsersTableComponent implements OnInit {
  public dataSource!: iUser[];
  public dataColumns: iGenericTableColumnsModel[] = [
    { columnDef: 'userId', displayName: 'Cédula' },
    { columnDef: 'name', displayName: 'Nombre' },
    { columnDef: 'lastName', displayName: 'Apellido' },
    { columnDef: 'email', displayName: 'Correo electrónico' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getUsersData();
  }

  getUsersData() {
    const usersData = [
      {
        userId: '111111111',
        name: 'First',
        lastName: 'Last',
        email: 'first-row01@mail.com',
      },
      {
        userId: '22222222',
        name: 'Second',
        lastName: 'Last',
        email: 'second-row02@mail.com',
      },
      {
        userId: '33333333',
        name: 'Third',
        lastName: 'Last',
        email: 'third-row03@mail.com',
      },
      {
        userId: '44444444',
        name: 'Fourth',
        lastName: 'Last',
        email: 'fourth-row04@mail.com',
      },
    ];
    this.dataSource = usersData;
  }

  redirToProfile() {
    this.router.navigateByUrl('users/profile');
  }
}
