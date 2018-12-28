import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '@core/store';
import { Insurance } from '@core/models';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-modal-list',
	templateUrl: './modal-list.component.html',
	styleUrls: [ './modal-list.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalListComponent implements OnInit {
	dataList$: Observable<Insurance[]>;

	constructor(private store: Store<fromStore.State>) {}

	ngOnInit() {
		this.dataList$ = this.store.select(fromStore.getInsurancesList);
	}
}
