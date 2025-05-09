import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import {
  UserFormComponent,
  userReducer,
  UsersComponent,
  UsersProfileComponent,
  UsersRoutingModule,
  UsersTableComponent,
} from '.';
import { GenericComponentsModule } from '../common';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    UsersProfileComponent,
    UsersComponent,
    UsersTableComponent,
    UserFormComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('users', userReducer),

    RouterModule,
    UsersRoutingModule,
    GenericComponentsModule,

    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class UsersModule {}
