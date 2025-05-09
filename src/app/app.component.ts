import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAuthSession, iSessionModel } from '../auth';
import { Actions } from '@ngrx/effects';
import { map, Observable, of, retry } from 'rxjs';
import { selectAuthSession } from '../auth/store/selectors/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  public isSessionActive$: Observable<boolean> = of(false);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(getAuthSession());
  }

  ngAfterViewInit(): void {
    this.isSessionActive$ = this.store
      .select(selectAuthSession)
      .pipe(map((session) => !!session?.accessToken));
  }
}
