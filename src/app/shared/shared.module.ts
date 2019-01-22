import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModule } from '@feature/feature.module';

import { COMPONENTS } from './components';
import { DIRECTIVES } from './directives/index';
import { CardItemComponent } from './components/card-item/card-item.component';

@NgModule({
	declarations: [ ...COMPONENTS, ...DIRECTIVES, CardItemComponent ],
	imports: [ CommonModule, FeatureModule ],
	exports: [ FeatureModule, ...COMPONENTS, ...DIRECTIVES ]
})
export class SharedModule {}
