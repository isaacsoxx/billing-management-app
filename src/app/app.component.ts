import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { getAuthSession, selectAuthSession } from '../auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public isSessionActive$: Observable<boolean> = this.store
    .select(selectAuthSession)
    .pipe(map((session) => !!session?.accessToken));

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(getAuthSession());
  }
}
