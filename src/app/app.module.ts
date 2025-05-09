import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import {
  AppRoutingModule,
  AppComponent,
  HeaderComponent,
  UserRegisterComponent,
} from '.';

import { AuthModule } from '../auth';
import { UsersModule } from '../users';
import { GenericComponentsModule } from '../common';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserRegisterComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    AuthModule,
    UsersModule,
    GenericComponentsModule,
    AppRoutingModule,

    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    AmplifyAuthenticatorModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
