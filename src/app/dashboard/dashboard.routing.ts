import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		loadChildren: './home/home.module#HomeModule'
	},
	{
		path: 'favorites',
		loadChildren: './favorites/favorites.module#FavoritesModule'
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(ROUTES) ],
	exports: [ RouterModule ]
})
export class DashboardRoutingModule {}
