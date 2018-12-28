import { NgModule } from '@angular/core';
import {
	MatToolbarModule,
	MatButtonModule,
	MatSidenavModule,
	MatIconModule,
	MatListModule,
	MatTableModule,
	MatInputModule,
	MatPaginatorModule,
	MatSortModule
} from '@angular/material';

// Module only for material design modules

@NgModule({
	declarations: [],
	exports: [
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatTableModule,
		MatSortModule,
		MatInputModule,
		MatPaginatorModule
	]
})
export class FeatureModule {}
