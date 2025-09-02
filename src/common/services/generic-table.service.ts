import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, map, of, switchMap } from 'rxjs';
import {
  selectAllSubscriptions,
  selectAllSubscriptionsError,
  selectAllUsers,
  selectAllUsersError,
} from '../../users';
import { iGenericTableKeys } from '../models';
import { selectDataSourceKey, setDataSourceKey } from '../store';

@Injectable({ providedIn: 'root' })
export class GenericTableService {
  private readonly statesKey: Record<iGenericTableKeys, any> = {
    [iGenericTableKeys.ALL_USERS]: {
      dataSourceSelector: selectAllUsers,
      dataSourceErrorSelector: selectAllUsersError,
    },
    [iGenericTableKeys.ALL_SUBSCRIPTIONS]: {
      dataSourceSelector: selectAllSubscriptions,
      dataSourceErrorSelector: selectAllSubscriptionsError,
    },
  };

  constructor(private store: Store) {}

  setDataSourceStateKey(dataSourceKey: iGenericTableKeys) {
    this.store.dispatch(setDataSourceKey({ dataSourceKey }));
  }

  getDataSourceState() {
    return this.store.select(selectDataSourceKey).pipe(
      switchMap((dataSourceKey: iGenericTableKeys | null) => {
        if (dataSourceKey) {
          const { dataSourceSelector, dataSourceErrorSelector } =
            this.getStateSelectorByKey(dataSourceKey);

          return combineLatest([
            this.store.select(dataSourceSelector),
            this.store.select(dataSourceErrorSelector),
          ]).pipe(
            map(([dataSource, dataSourceError]) => ({
              data: dataSource,
              error: dataSourceError,
              hasData: Array.isArray(dataSource) && dataSource.length > 0,
            }))
          );
        }
        return of({ data: [], error: null, hasData: false });
      })
    );
  }

  getStateSelectorByKey(key: iGenericTableKeys) {
    return this.statesKey[key];
  }
}
