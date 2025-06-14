import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { iApiResponseModel } from '../../common';
import { environment } from '../../environments/environment.development';
import { iUser } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAllUsersAsync() {
    return this.http.get<iApiResponseModel<iUser>>(
      `${environment.billingManagementServiceApiUrl}/users`
    );
  }

  getAllSubscriptionsAsync(uuid: string) {
    return this.http.get<iApiResponseModel<iUser>>(
      `${environment.billingManagementServiceApiUrl}/users/${uuid}/subscriptions`
    );
  }
}
