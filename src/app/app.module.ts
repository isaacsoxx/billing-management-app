import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatTooltipModule } from '@angular/material/tooltip'; 
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list'; 

import { GenericComponentsModule } from '../common/generic-components.module';

import { HeaderComponent } from './header/header.component';
import { UserFormComponent, UsersComponent, UsersTableComponent } from './users';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    UsersTableComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GenericComponentsModule,

    ReactiveFormsModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
