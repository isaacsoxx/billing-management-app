import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setIsLoading } from '..';

export const withLoading =
  <T>(store: Store) =>
  (source$: Observable<T>) =>
    new Observable<T>((subscriber) => {
      store.dispatch(setIsLoading({ isLoading: true }));

      const subscription = source$.subscribe({
        next: (value) => subscriber.next(value),
        error: (err) => {
          subscriber.error(err);
          store.dispatch(setIsLoading({ isLoading: false }));
        },
        complete: () => {
          subscriber.complete();
          store.dispatch(setIsLoading({ isLoading: false }));
        },
      });

      return () => subscription.unsubscribe();
    });
