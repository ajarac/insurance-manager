import { Directive, Input, HostBinding, OnInit } from '@angular/core';

@Directive({
	selector: '[rowEqual]'
})
export class RowEqualDirective implements OnInit {
	@Input() countRouws = 1;

	@HostBinding('style.width.%') width: number;

	ngOnInit() {
		this.width = 100 / this.countRouws;
	}
}
