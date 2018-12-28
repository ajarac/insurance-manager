import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material';

// Components
import { FavoritesComponent } from './favorites.component';
import { COMPONENTS, ENTRY_COMPONENTS } from './components';

// Modules
import { SharedModule } from '@shared/shared.module';

@NgModule({
	declarations: [ FavoritesComponent, ...COMPONENTS, ...ENTRY_COMPONENTS ],
	imports: [ CommonModule, RouterModule, MatDialogModule, SharedModule ]
})
export class FavoritesModule {}
