import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { iGenericRowModel, iGenericTableColumnsModel } from '../../models';
import { Store } from '@ngrx/store';
import { selectRow } from '../../store';

@Component({
  selector: 'app-generic-table',
  standalone: false,

  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss',
})
export class GenericTableComponent implements OnInit {
  @Input('dataSource') dataSource!: iGenericRowModel[];
  @Input('columns') columns!: iGenericTableColumnsModel[];
  @Output('onRowSelectEvent') onRowSelectEvent = new EventEmitter<null>();

  public displayedColumns!: string[];
  public displayPopupActions!: boolean;
  public selectedRow!: iGenericRowModel;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.displayedColumns = this.columns.map(
      (column: iGenericTableColumnsModel) => column.columnDef
    );
  }

  setSelectedRow(row: iGenericRowModel) {
    this.store.dispatch(selectRow({ row }));
    this.onRowSelectEvent.emit();
  }
}
