import { RowEqualDirective } from './row-equal.directive';

describe('RowEqualDirective', () => {
	let rowEqualDirective: RowEqualDirective;

	beforeEach(() => {
		rowEqualDirective = new RowEqualDirective();
	});

	it('should calculate width by countRouws', () => {
		rowEqualDirective = new RowEqualDirective();

		rowEqualDirective.countRouws = 5;
		rowEqualDirective.ngOnInit();

		expect(rowEqualDirective.width).toEqual(20);
	});

	it(`should calculate width to 100% when don't pass any any countRows`, () => {
		rowEqualDirective = new RowEqualDirective();

		rowEqualDirective.ngOnInit();

		expect(rowEqualDirective.width).toEqual(100);
	});
});
