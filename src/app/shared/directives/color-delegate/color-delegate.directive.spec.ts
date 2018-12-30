import { ColorDelegateDirective } from './color-delegate.directive';

describe('ColorDelegateDirective', () => {
	let colorDelegateDirective: ColorDelegateDirective;

	it('should set color by input delegate func', () => {
		colorDelegateDirective = new ColorDelegateDirective();

		colorDelegateDirective.delegate = () => 'red';
		colorDelegateDirective.ngOnChanges();

		expect(colorDelegateDirective.color).toBe('red');
	});

	it('should no set color if dont pass any delegate func, set a empty string', () => {
		colorDelegateDirective = new ColorDelegateDirective();

		colorDelegateDirective.ngOnChanges();

		expect(colorDelegateDirective.color).toBe('');
	});
});
