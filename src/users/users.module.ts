import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import {
  UserFormComponent,
  UsersComponent,
  UsersProfileComponent,
  UsersRoutingModule,
  UsersTableComponent,
} from '.';
import { GenericComponentsModule } from '../common';

@NgModule({
  declarations: [
    UsersProfileComponent,
    UsersComponent,
    UsersTableComponent,
    UserFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    UsersRoutingModule,
    GenericComponentsModule,

    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class UsersModule {}
