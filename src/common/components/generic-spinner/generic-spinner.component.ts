import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { selectIsLoading } from '../../store';

@Component({
  selector: 'app-generic-spinner',
  standalone: false,

  templateUrl: './generic-spinner.component.html',
  styleUrl: './generic-spinner.component.scss',
})
export class GenericSpinnerComponent {
  isLoading$: Observable<boolean>;

  constructor(private store: Store) {
    this.isLoading$ = this.store.select(selectIsLoading);
  }
}
