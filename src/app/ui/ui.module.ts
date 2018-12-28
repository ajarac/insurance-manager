import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';

// Modules
import { SharedModule } from '@shared/shared.module';

// List of components
import { COMPONENTS } from './components/index';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
	declarations: [ ...COMPONENTS, SidenavComponent ],
	imports: [ CommonModule, RouterModule,LayoutModule, SharedModule ],
	exports: [ ...COMPONENTS ]
})
export class UiModule {}
