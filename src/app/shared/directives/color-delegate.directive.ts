import { Input, OnInit, HostBinding, Directive } from '@angular/core';

@Directive({
	selector: '[colorDelegate]'
})
export class ColorDelegateDirective implements OnInit {
	@Input() delegate: () => string;

	@HostBinding('style.color') color: string;

	ngOnInit() {
		this.color = this.delegate();
	}
}
