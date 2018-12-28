import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// Core
import { Insurance } from '@core/models';
import * as fromStore from '@core/store';

// Shared
import { TableHeader, TableActionEvent, TableAction } from '@shared/models/table.model';

@Component({
	selector: 'app-insurance-list',
	templateUrl: './insurance-list.component.html',
	styleUrls: [ './insurance-list.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class InsuranceListComponent implements OnInit {
	insuranceList$: Observable<Insurance[]>;

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
		},
		{
			title: 'Price',
			property: 'price'
		}
	];
	/*
	actions: TableAction<Insurance>[] = [
		{ icon: 'favorite', getColor: (el: Insurance) => () => (el.favorite ? 'red' : 'black') }
	];*/

	constructor(private store: Store<fromStore.State>) {}

	ngOnInit() {
		this.insuranceList$ = this.store.select(fromStore.getInsurancesList);
	}

	clickFavorite({ element }: TableActionEvent<Insurance>): void {
		this.store.dispatch(new fromStore.ToggleFavoriteInsurance(element));
	}
}
