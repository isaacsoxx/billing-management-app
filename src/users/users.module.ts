import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import {
  userReducer,
  UsersComponent,
  UsersFormComponent,
  UsersProfileComponent,
  UsersRegisterComponent,
  UsersRoutingModule,
  UsersTableComponent,
} from '.';
import { GenericComponentsModule } from '../common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './store/effects/users.effects';

@NgModule({
  declarations: [
    UsersProfileComponent,
    UsersComponent,
    UsersTableComponent,
    UsersFormComponent,
    UsersRegisterComponent,
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([UsersEffects]),
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
