import { Insurance } from '@core/models/';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromStore from '@core/store';
import { ListConfig } from '@shared/models';

import { ModalListComponent } from '../../components';

@Component({
	selector: 'app-favorites-list',
	templateUrl: './favorites-list.component.html',
	styleUrls: [ './favorites-list.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesListComponent implements OnInit {
	favoritesList$: Observable<Insurance[]>;

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
		actions: [],
		title: (item: Insurance) => `${item.brand} - ${item.kind}`
	};

	constructor(private store: Store<fromStore.State>, private router: Router, public dialog: MatDialog) {}

	ngOnInit() {
		this.favoritesList$ = this.store.select(fromStore.getFavoritesList);
	}

	openDialog(): void {
		this.dialog.open(ModalListComponent, {
			width: '50rem'
		});
	}
}
