import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { iGenericModalAction, iGenericModalConfig } from '../../models';

@Component({
  selector: 'app-generic-modal',
  standalone: false,
  
  templateUrl: './generic-modal.component.html',
  styleUrl: './generic-modal.component.scss'
})
export class GenericModalComponent implements OnInit {
  public title!: string;
  public content!: TemplateRef<any>;
  public actionButtons!: iGenericModalAction[];
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: iGenericModalConfig
  ) {
    if (data) {
      this.title = data.title;
      this.content = data.content;
      this.actionButtons = data.actionButtons;
      console.log(data);
      
    }
  }
  
  ngOnInit(): void {
    
  }
}
