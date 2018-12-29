import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesListComponent } from './pages/';

const ROUTES: Routes = [
	{
		path: '',
		component: FavoritesListComponent
	}
];

@NgModule({
	imports: [ RouterModule.forChild(ROUTES) ],
	exports: [ RouterModule ]
})
export class FavoritesRoutingModule {}
