import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { iApiResponseModel } from '../../common';
import { environment } from '../../environments/environment.development';
import { iStaff, iUser } from '../models';

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

  createNewUserAsync(newUser: iUser) {
    return this.http.post<iApiResponseModel<string>>(
      `${environment.billingManagementServiceApiUrl}/users`,
      newUser
    );
  }

  getAllSubscriptionsAsync(uuid: string) {
    return this.http.get<iApiResponseModel<iUser>>(
      `${environment.billingManagementServiceApiUrl}/users/${uuid}/subscriptions`
    );
  }

  createNewSubscriptionAsync(sponsorUuid: string, newStaff: iStaff) {
    return this.http.post<iApiResponseModel<string>>(
      `${environment.billingManagementServiceApiUrl}/users/${sponsorUuid}/subscriptions`,
      newStaff
    );
  }
}
