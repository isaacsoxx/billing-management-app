import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table'; 
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

import { GenericFormComponent, GenericModalComponent, GenericPopupBarComponent, GenericTableComponent } from '.';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [GenericTableComponent, GenericPopupBarComponent, GenericModalComponent, GenericFormComponent],
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
    
    CommonModule
  ],
  exports: [
    GenericTableComponent,
    GenericModalComponent,
    GenericFormComponent
  ]
})
export class GenericComponentsModule { }
