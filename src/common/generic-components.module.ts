import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
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
  GenericSpinnerComponent,
  GenericModalTemplateComponent,
} from '.';
import { reducers } from './store';

@NgModule({
  declarations: [
    GenericTableComponent,
    GenericModalTemplateComponent,
    GenericModalComponent,
    GenericFormComponent,
    GenericSpinnerComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('common', reducers),

    MatProgressSpinnerModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
  ],
  exports: [
    GenericTableComponent,
    GenericModalComponent,
    GenericFormComponent,
    GenericSpinnerComponent,
  ],
})
export class GenericComponentsModule {}
