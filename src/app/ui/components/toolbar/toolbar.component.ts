import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: [ './toolbar.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
	@Output() drawerToggle: EventEmitter<void> = new EventEmitter<void>();

	clickDrawer(): void {
		this.drawerToggle.emit();
	}
}
