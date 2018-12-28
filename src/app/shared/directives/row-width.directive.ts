import { Directive, Input, HostBinding, OnInit } from '@angular/core';

@Directive({
	selector: '[row-width]'
})
export class RowWidthDirective implements OnInit {
	@Input() countRouws: number;

	@HostBinding('style.width.%') width: number;

	ngOnInit() {
		this.width = 100 / this.countRouws;
	}
}
