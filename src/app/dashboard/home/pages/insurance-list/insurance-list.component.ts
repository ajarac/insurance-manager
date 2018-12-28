import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// Core
import { Insurance } from '@core/models';
import * as fromStore from '@core/store';

// Shared
import { TableHeader } from '@shared/models/table.model';

@Component({
	selector: 'app-insurance-list',
	templateUrl: './insurance-list.component.html',
	styleUrls: [ './insurance-list.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class InsuranceListComponent implements OnInit {
	insuranceList$: Observable<Insurance[]>;

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
		},
		{
			title: 'Price',
			property: 'price'
		}
	];

	constructor(private store: Store<any>) {}

	ngOnInit() {
		this.store.dispatch(new fromStore.GetInsurance());
		this.insuranceList$ = this.store.select(fromStore.getInsurancesList);
	}
}
