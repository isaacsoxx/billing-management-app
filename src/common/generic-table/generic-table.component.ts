import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { iGenericTableActionsModel, iGenericTableColumnsModel } from '../../models';
import { GenericPopupBarComponent } from '../generic-popup-bar/generic-popup-bar.component';

@Component({
  selector: 'app-generic-table',
  standalone: false,
  
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss'
})
export class GenericTableComponent<T> implements OnInit {
  @ViewChild('tableActionsPopup') private tableActionsPopup!: GenericPopupBarComponent;
  
  @Input('dataSource') dataSource!: T[];
  @Input('columns') columns!: iGenericTableColumnsModel[];
  @Input('tableActions') tableActions!: iGenericTableActionsModel[];

  public displayedColumns!: string[];
  public displayPopupActions!: boolean;
  
  ngOnInit(): void {
    this.displayedColumns = this.columns.map((column: iGenericTableColumnsModel) => column.columnDef);

  }

  enablePopUpActions(row: T) {
    console.log(row);
    this.tableActionsPopup.onDisplay();
  }
}
