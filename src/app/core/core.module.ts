import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { environment as env } from '@env/environment';

import { ApiService } from './http/api.service';

// Services
import { SERVICES } from './services/index';

// Redux
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store';
import { EFFECTS } from './store/effects/index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		HttpClientModule,
		StoreModule.forRoot(reducers),
		EffectsModule.forRoot(EFFECTS),
		!env.production ? StoreDevtoolsModule.instrument() : []
	],
	providers: [ { provide: 'API_URL', useValue: env.api }, ApiService, ...SERVICES ]
})
export class CoreModule {}
