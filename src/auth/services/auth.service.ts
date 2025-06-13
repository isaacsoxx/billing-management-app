import { Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAuthSession } from '../store';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private sessionToken?: string = '';

  constructor(private store: Store) {
    this.store.select(selectAuthSession).subscribe((session) => {
      this.sessionToken = session?.accessToken;
    });
  }

  getSessionToken() {
    return this.sessionToken;
  }
}
