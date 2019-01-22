import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { ListConfig, ListActionEvent } from '@shared/models';

@Component({
	selector: 'app-card-item',
	templateUrl: './card-item.component.html',
	styleUrls: [ './card-item.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardItemComponent<T> {
	@Input() item: T;
	@Input() listConfig: ListConfig<T>;

	@Output() clickAction: EventEmitter<ListActionEvent<T>> = new EventEmitter<ListActionEvent<T>>();
	onClickAction(action: string): void {
		this.clickAction.emit({ element: this.item, action });
	}
}
