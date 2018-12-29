import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';

// Components
import { COMPONENTS, ENTRY_COMPONENTS } from './components';
import { PAGES } from './pages';

// Modules
import { SharedModule } from '@shared/shared.module';
import { FavoritesRoutingModule } from './favorites.routing';

@NgModule({
	declarations: [ ...COMPONENTS, ...ENTRY_COMPONENTS, ...PAGES ],
	entryComponents: [ ...ENTRY_COMPONENTS ],
	imports: [ CommonModule, FavoritesRoutingModule, MatDialogModule, SharedModule ]
})
export class FavoritesModule {}
