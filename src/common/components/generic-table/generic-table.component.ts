import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { iGenericRowModel, iGenericTableColumnsModel } from '../../models';

@Component({
  selector: 'app-generic-table',
  standalone: false,

  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss',
})
export class GenericTableComponent implements OnInit {
  @Input('dataSource') dataSource$!: Observable<any>;
  @Input('dataSourceError') dataSourceError$!: Observable<boolean>;
  @Input('columns') columns!: iGenericTableColumnsModel[];
  @Output('onRowSelectEvent') onRowSelectEvent =
    new EventEmitter<iGenericRowModel>();

  public displayedColumns!: string[];
  public displayPopupActions!: boolean;
  public selectedRow!: iGenericRowModel;
  public dataSourceState$!: Observable<{
    data: any;
    error: boolean;
    hasData: boolean;
  }>;

  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = this.columns.map(
      (column: iGenericTableColumnsModel) => column.columnDef
    );

    this.dataSourceState$ = combineLatest([
      this.dataSource$,
      this.dataSourceError$,
    ]).pipe(
      map(([dataSource, dataSourceError]) => ({
        data: dataSource,
        error: dataSourceError,
        hasData: dataSource.length > 0,
      }))
    );
  }

  setSelectedRow(row: iGenericRowModel) {
    this.onRowSelectEvent.emit(row);
  }
}
