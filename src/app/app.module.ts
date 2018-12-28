import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { UiModule } from '@ui/ui.module';
import { CoreModule } from '@core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';

// App Component
import { AppComponent } from './app.component';

@NgModule({
	declarations: [ AppComponent ],
	imports: [ BrowserModule, BrowserAnimationsModule, RouterModule, CoreModule, UiModule, DashboardModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
