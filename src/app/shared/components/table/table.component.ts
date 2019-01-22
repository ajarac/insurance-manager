import {
	Component,
	ChangeDetectionStrategy,
	Input,
	OnInit,
	Output,
	EventEmitter,
	ViewChild,
	OnDestroy
} from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { ListActionEvent, ListConfig } from '@shared/models';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: [ './table.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent<T> implements OnInit, OnDestroy {
	@Input() listConfig: ListConfig<T>;

	@Input() dataSource: MatTableDataSource<T>;

	@Output() clickAction: EventEmitter<ListActionEvent<T>> = new EventEmitter<ListActionEvent<T>>();

	displayedColumns: string[];

	readonly actionName: string = 'actions';
	readonly imageName: string = 'images';

	@ViewChild(MatSort) sort: MatSort;

	ngOnInit() {
		console.log('listConfig', this.listConfig);
		this.displayedColumns = this.listConfig.headers.map((h) => h.property);
		if (this.listConfig.actions.length) {
			this.displayedColumns.push(this.actionName);
		}

		if (this.listConfig.images.length) {
			this.displayedColumns.unshift(this.imageName);
		}

		this.dataSource.sort = this.sort;
	}

	ngOnDestroy() {
		this.dataSource.sort = null;
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	onClickAction(element: T, action: string): void {
		this.clickAction.emit({ element, action });
	}
}
