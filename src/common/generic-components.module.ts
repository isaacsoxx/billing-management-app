import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericTableComponent } from './generic-table/generic-table.component';
import { GenericModalComponent } from './generic-modal/generic-modal.component';
import { GenericPopupBarComponent } from './generic-popup-bar/generic-popup-bar.component';
import { GenericFormComponent } from './generic-form/generic-form.component';

import { MatTableModule } from '@angular/material/table'; 
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog'; 

@NgModule({
  declarations: [GenericTableComponent, GenericPopupBarComponent, GenericModalComponent, GenericFormComponent],
  imports: [
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
