import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '@core/store';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: [ './dashboard.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
	constructor(private store: Store<fromStore.State>) {}

	ngOnInit() {
		this.store.dispatch(new fromStore.GetInsurance());
	}
}
