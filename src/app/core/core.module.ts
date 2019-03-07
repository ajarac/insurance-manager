import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {environment as env} from '@env/environment';

import {ApiService} from './http/api.service';
// Services
import {SERVICES} from '@core/services';
// Store NGXS
import {NgxsModule} from '@ngxs/store';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {STATES} from '@core/store/state';

const devModules: any[] = !env.production ? [
  NgxsReduxDevtoolsPluginModule.forRoot(),
  NgxsLoggerPluginModule
] : [];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsModule.forRoot(STATES),
    NgxsStoragePluginModule.forRoot(),
    ...devModules
  ],
  providers: [{provide: 'API_URL', useValue: env.api}, ApiService, ...SERVICES]
})
export class CoreModule {
}
