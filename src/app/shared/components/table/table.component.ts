import {
	Component,
	ChangeDetectionStrategy,
	Input,
	OnInit,
	OnChanges,
	Output,
	EventEmitter,
	ViewChild
} from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { TableHeader, TableActionEmit } from '@shared/models';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: [ './table.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit, OnChanges {
	@Input() dataList: any[] = [];
	@Input() headers: TableHeader[];
	@Input() actions: string[] = [];

	@Output() clickAction: EventEmitter<TableActionEmit<any>> = new EventEmitter<TableActionEmit<any>>();

	displayedColumns: string[];
	dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	ngOnInit() {
		this.displayedColumns = this.headers.map((h) => h.property);
		if (this.actions.length) {
			this.displayedColumns.push('Actions');
		}

		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	ngOnChanges() {
		this.dataSource.data = this.dataList;
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	onClickAction(element: any, action: string): void {
		this.clickAction.emit({ element, action });
	}
}
