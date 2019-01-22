import { Component, ChangeDetectionStrategy, Input, ContentChild, TemplateRef } from '@angular/core';
import { NgForOfContext } from '@angular/common';

@Component({
	selector: 'app-list-container',
	templateUrl: './list-container.component.html',
	styleUrls: [ './list-container.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListContainerComponent<T> {
	@Input() dataList: Array<T>;

	@ContentChild(TemplateRef) public itemTmpl: TemplateRef<NgForOfContext<T>>;
}
