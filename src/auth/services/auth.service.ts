import { Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAuthSession } from '../store';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { iDeviceTrustDto } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private sessionToken?: string = '';

  constructor(private store: Store, private http: HttpClient) {
    this.store.select(selectAuthSession).subscribe((session) => {
      this.sessionToken = session?.accessToken;
    });
  }

  getSessionToken() {
    return this.sessionToken;
  }

  registerDeviceTrust(deviceTrustDto: iDeviceTrustDto) {
    return this.http.post(
      `${environment.billingManagementServiceApiUrl}/auth/register-trust-device`,
      deviceTrustDto
    );
  }
}
