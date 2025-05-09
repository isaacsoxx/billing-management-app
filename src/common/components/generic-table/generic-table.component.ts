import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { iGenericRowModel, iGenericTableColumnsModel } from '../../models';

@Component({
  selector: 'app-generic-table',
  standalone: false,

  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss',
})
export class GenericTableComponent implements OnInit {
  @Input('dataSource') dataSource!: iGenericRowModel[];
  @Input('columns') columns!: iGenericTableColumnsModel[];
  @Output('onRowSelectEvent') onRowSelectEvent =
    new EventEmitter<iGenericRowModel>();

  public displayedColumns!: string[];
  public displayPopupActions!: boolean;
  public selectedRow!: iGenericRowModel;

  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = this.columns.map(
      (column: iGenericTableColumnsModel) => column.columnDef
    );
  }

  setSelectedRow(row: iGenericRowModel) {
    this.onRowSelectEvent.emit(row);
  }
}
