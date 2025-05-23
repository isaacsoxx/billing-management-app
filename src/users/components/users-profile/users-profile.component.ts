import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { getSelectedUser, iUser } from '../..';

@Component({
  selector: 'app-users-profile',
  standalone: false,

  templateUrl: './users-profile.component.html',
  styleUrl: './users-profile.component.scss',
})
export class UsersProfileComponent implements OnInit {
  public selectedUser$!: Observable<iUser | null>;

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    this.selectedUser$ = this.store.select(getSelectedUser).pipe(
      tap((user: iUser | null) => {
        if (!user) {
          this.router.navigateByUrl('/users');
        }
      })
    );
  }
}
