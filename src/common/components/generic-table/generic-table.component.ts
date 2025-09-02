import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { iGenericRowModel, iGenericTableColumnsModel } from '../../models';
import { GenericTableService } from '../../services';
import { resetDataSourceKey } from '../../store';

@Component({
  selector: 'app-generic-table',
  standalone: false,

  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss',
})
export class GenericTableComponent implements OnInit, OnDestroy {
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

  constructor(
    private readonly genericTableService: GenericTableService,
    private readonly store: Store
  ) {}

  ngOnInit(): void {
    this.displayedColumns = this.columns.map(
      (column: iGenericTableColumnsModel) => column.columnDef
    );

    this.dataSourceState$ = this.genericTableService.getDataSourceState().pipe(
      map((dataSourceState) => ({
        data: dataSourceState.data,
        error: dataSourceState.error as boolean,
        hasData: dataSourceState.hasData,
      }))
    );
  }

  ngOnDestroy(): void {
    this.store.dispatch(resetDataSourceKey());
  }

  setSelectedRow(row: iGenericRowModel) {
    this.onRowSelectEvent.emit(row);
  }
}
