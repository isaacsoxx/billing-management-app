import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { selectUserDetails, iUser, setSelectedUser } from '../..';

@Component({
  selector: 'app-users-profile',
  standalone: false,

  templateUrl: './users-profile.component.html',
  styleUrl: './users-profile.component.scss',
})
export class UsersProfileComponent implements OnInit, OnDestroy {
  public selectedUser$!: Observable<iUser | null>;

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    this.selectedUser$ = this.store.select(selectUserDetails).pipe(
      tap((user: iUser | null) => {
        if (!user) {
          this.router.navigateByUrl('/users');
        }
      })
    );
  }

  ngOnDestroy() {
    this.store.dispatch(setSelectedUser({ user: null }));
  }
}
