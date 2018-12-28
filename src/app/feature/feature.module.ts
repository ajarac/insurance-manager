import { NgModule } from '@angular/core';
import {
	MatToolbarModule,
	MatButtonModule,
	MatSidenavModule,
	MatIconModule,
	MatListModule,
	MatTableModule,
	MatInputModule,
	MatPaginatorModule
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
		MatInputModule,
		MatPaginatorModule
	]
})
export class FeatureModule {}
