import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	ViewChild,
	Output,
	EventEmitter,
	OnChanges,
	Input
} from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ListActionEvent, ListAction, ListHeader, ListConfig } from '@shared/models';
@Component({
	selector: 'app-dynamic-list',
	templateUrl: './dynamic-list.component.html',
	styleUrls: [ './dynamic-list.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicListComponent<T> implements OnInit, OnChanges {
	@Input() dataList: T[] = [];
	@Input() listConfig: ListConfig<T>;

	@Output() clickAction: EventEmitter<ListActionEvent<T>> = new EventEmitter<ListActionEvent<T>>();

	@ViewChild(MatPaginator) paginator: MatPaginator;

	dataSource: MatTableDataSource<T> = new MatTableDataSource<T>();

	isHandset$: Observable<boolean> = this.breakpointObserver
		.observe(Breakpoints.Handset)
		.pipe(map((result) => result.matches));

	constructor(private breakpointObserver: BreakpointObserver) {}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
	}

	ngOnChanges() {
		this.dataSource.data = this.dataList;
	}

	applyFilter(text: string): void {
		this.dataSource.filter = text.trim().toLowerCase();
	}

	onClickAction(element: T, action: string): void {
		this.clickAction.emit({ element, action });
	}
}
