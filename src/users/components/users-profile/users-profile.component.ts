import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { getSelectedRow, iGenericRowModel } from '../../../common';
import { iUser } from '../..';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-profile',
  standalone: false,

  templateUrl: './users-profile.component.html',
  styleUrl: './users-profile.component.scss',
})
export class UsersProfileComponent {
  private selectedUser$!: Observable<iGenericRowModel | null>;
  public userData!: Partial<iUser>;

  constructor(private genericStore: Store, private router: Router) {
    this.selectedUser$ = this.genericStore.select(getSelectedRow);

    this.selectedUser$
      .pipe(
        tap((user: iGenericRowModel | null) => {
          if (!!user) {
            this.userData = user;
          } else {
            this.router.navigateByUrl('/users');
          }
        })
      )
      .subscribe();
  }
}
