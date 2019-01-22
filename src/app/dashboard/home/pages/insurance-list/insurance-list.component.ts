import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// Core
import { Insurance } from '@core/models';
import * as fromStore from '@core/store';

// Shared
import { ListConfig } from '@shared/models';

@Component({
	selector: 'app-insurance-list',
	templateUrl: './insurance-list.component.html',
	styleUrls: [ './insurance-list.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class InsuranceListComponent implements OnInit {
	insuranceList$: Observable<Insurance[]>;

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
			},
			{
				title: 'Price',
				property: 'price'
			}
		],
		images: [ 'brand-image' ],
		actions: [],
		title: (item: Insurance) => `${item.brand} - ${item.kind}`
	};

	constructor(private store: Store<fromStore.State>) {}

	ngOnInit() {
		this.insuranceList$ = this.store.select(fromStore.getInsurancesList);
	}
}
