import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '@core/store';
import { Insurance } from '@core/models';
import { ListActionEvent, ListConfig } from '@shared/models';

@Component({
	selector: 'app-modal-list',
	templateUrl: './modal-list.component.html',
	styleUrls: [ './modal-list.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalListComponent implements OnInit {
	dataList$: Observable<Insurance[]>;

	listConfig: ListConfig<Insurance> = {
		headers: [
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
		],
		images: [ 'brand-image' ],
		actions: [ { icon: 'favorite', getColor: (el: Insurance) => () => (el.favorite ? 'red' : 'black') } ],
		title: (item: Insurance) => `${item.brand} - ${item.kind}`
	};

	constructor(private store: Store<fromStore.State>) {}

	ngOnInit() {
		this.dataList$ = this.store.select(fromStore.getInsurancesList);
	}

	onClickFavorite({ element }: ListActionEvent<Insurance>): void {
		this.store.dispatch(new fromStore.ToggleFavoriteInsurance(element));
	}
}
