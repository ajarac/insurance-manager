import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromStore from '@core/store';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: [ './sidenav.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {
	countFavorites$: Observable<number>;

	constructor(private store: Store<fromStore.State>) {}

	ngOnInit() {
		this.countFavorites$ = this.store.select(fromStore.getFavoritesIds).pipe(map((ids: string[]) => ids.length));
	}
}
