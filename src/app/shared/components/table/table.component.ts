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
import { TableHeader, TableActionEvent, TableAction } from '@shared/models';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: [ './table.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent<T> implements OnInit, OnChanges {
	@Input() dataList: T[] = [];
	@Input() headers: TableHeader[];
	@Input() actions: TableAction<T>[] = [];
	@Input() images: string[] = [];

	@Output() clickAction: EventEmitter<TableActionEvent<T>> = new EventEmitter<TableActionEvent<T>>();

	displayedColumns: string[];
	dataSource: MatTableDataSource<T> = new MatTableDataSource<T>();

	readonly actionName: string = 'actions';
	readonly imageName: string = 'images';

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	ngOnInit() {
		this.displayedColumns = this.headers.map((h) => h.property);
		if (this.actions.length) {
			this.displayedColumns.push(this.actionName);
		}

		if (this.images.length) {
			this.displayedColumns.unshift(this.imageName);
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

	onClickAction(element: T, action: string): void {
		this.clickAction.emit({ element, action });
	}
}
