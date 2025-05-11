import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { getAuthSession, selectAuthSession } from '../auth';

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
