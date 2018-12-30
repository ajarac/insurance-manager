import { Input, HostBinding, Directive, OnChanges } from '@angular/core';

@Directive({
	selector: '[colorDelegate]'
})
export class ColorDelegateDirective implements OnChanges {
	@HostBinding('style.color') color: string;

	@Input() delegate: () => string = () => '';

	ngOnChanges() {
		this.color = this.delegate();
	}
}
