import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsuranceListComponent } from './pages';

const ROUTES: Routes = [
	{
		path: '',
		component: InsuranceListComponent
	}
];

@NgModule({
	imports: [ RouterModule.forChild(ROUTES) ],
	exports: [ RouterModule ]
})
export class HomeRoutingModule {}
