import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table'; 

import { GenericTableComponent } from './generic-table/generic-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GenericPopupBarComponent } from './generic-popup-bar/generic-popup-bar.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [GenericTableComponent, GenericPopupBarComponent],
  imports: [
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatTableModule,
    
    CommonModule
  ],
  exports: [
    GenericTableComponent,

  ]
})
export class GenericComponentsModule { }
