import { Input, HostBinding, Directive, OnChanges } from '@angular/core';

@Directive({
	selector: '[colorDelegate]'
})
export class ColorDelegateDirective implements OnChanges {
	@Input() delegate: () => string;

	@HostBinding('style.color') color: string;

	ngOnChanges() {
		this.color = this.delegate();
	}
}
