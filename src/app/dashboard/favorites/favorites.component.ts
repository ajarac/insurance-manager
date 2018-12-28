import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ModalListComponent } from './components/modal-list/modal-list.component';

@Component({
	selector: 'app-favorites',
	templateUrl: './favorites.component.html',
	styleUrls: [ './favorites.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent {
	constructor(private router: Router, public dialog: MatDialog) {}

	openDialog(): void {
		const dialogRef = this.dialog.open(ModalListComponent, {});
		dialogRef.afterClosed().subscribe(() => this.closeModal());
	}

	closeModal(): void {
		this.router.navigate([ '/home' ]);
	}
}
