import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModule } from '@feature/feature.module';

import { COMPONENTS } from './components';
import { DIRECTIVES } from './directives/index';

@NgModule({
	declarations: [ ...COMPONENTS, ...DIRECTIVES ],
	imports: [ CommonModule, FeatureModule ],
	exports: [ FeatureModule, ...COMPONENTS, ...DIRECTIVES ]
})
export class SharedModule {}
