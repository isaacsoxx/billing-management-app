import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { StoreModule } from '@ngrx/store';

import {
  GenericFormComponent,
  GenericModalComponent,
  GenericTableComponent,
} from '.';
import { tableReducer } from './store';

@NgModule({
  declarations: [
    GenericTableComponent,
    GenericModalComponent,
    GenericFormComponent,
  ],
  imports: [
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,

    CommonModule,
    StoreModule.forRoot({ table: tableReducer }),
  ],
  exports: [GenericTableComponent, GenericModalComponent, GenericFormComponent],
})
export class GenericComponentsModule {}
