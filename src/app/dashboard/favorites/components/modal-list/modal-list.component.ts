import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '@core/store';
import { Insurance } from '@core/models';
import { TableHeader, TableAction, TableActionEvent } from '@shared/models';

@Component({
	selector: 'app-modal-list',
	templateUrl: './modal-list.component.html',
	styleUrls: [ './modal-list.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalListComponent implements OnInit {
	dataList$: Observable<Insurance[]>;

	images: string[] = [ 'brand-image' ];

	headers: TableHeader[] = [
		{
			title: 'Product Name',
			property: 'name'
		},
		{
			title: 'Insurance Company',
			property: 'brand'
		},
		{
			title: 'Policy Kind',
			property: 'kind'
		}
	];

	actions: TableAction<Insurance>[] = [
		{ icon: 'favorite', getColor: (el: Insurance) => () => (el.favorite ? 'red' : 'black') }
	];

	constructor(private store: Store<fromStore.State>) {}

	ngOnInit() {
		this.dataList$ = this.store.select(fromStore.getInsurancesList);
	}

	onClickFavorite({ element }: TableActionEvent<Insurance>): void {
		this.store.dispatch(new fromStore.ToggleFavoriteInsurance(element));
	}
}
