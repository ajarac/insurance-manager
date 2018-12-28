import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing';

import { SharedModule } from '@shared/shared.module';

import { PAGES } from './pages';

@NgModule({
	declarations: [ ...PAGES ],
	imports: [ CommonModule, HomeRoutingModule, SharedModule ]
})
export class HomeModule {}
