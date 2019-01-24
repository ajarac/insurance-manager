import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { CardItemComponent } from './card-item.component';

describe('CardItemComponent', () => {
	let component: CardItemComponent<any>;
	let fixture: ComponentFixture<CardItemComponent<any>>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ CardItemComponent ],
				schemas: [ NO_ERRORS_SCHEMA ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(CardItemComponent);
		component = fixture.componentInstance;
		component.item = {
			id: '5',
			name: 'Cuidado con el peatón',
			brand: 'Liberty',
			'brand-image': 'brand_liberty.png',
			kind: 'Coche',
			'Kind-image': 'kind_car.png',
			price: '120'
		};
		component.listConfig = {
			headers: [
				{
					title: 'Product Name',
					property: 'name'
				},
				{
					title: 'Insurance Company',
					property: 'brand'
				},
				{
					title: 'Policy Kind',
					property: 'kind'
				},
				{
					title: 'Price',
					property: 'price'
				}
			],
			images: [ 'brand-image' ],
			actions: [ { icon: 'favorite', getColor: () => () => 'red' } ],
			title: (item) => `${item.name} - ${item.brand}`
		};
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should show title', () => {
		const title = fixture.debugElement.query(By.css('#title')).nativeElement.textContent;

		expect(title).toBe('Cuidado con el peatón - Liberty');
	});

	it('should create list of headers', () => {
		const headers = fixture.debugElement.queryAll(By.css('.row'));

		expect(headers.length).toBe(4);
	});

	it('should show header and our property', () => {
		const headers = fixture.debugElement.queryAll(By.css('.row'));

		const header = headers[0].query(By.css('label')).nativeElement.textContent;
		const property = headers[0].query(By.css('span')).nativeElement.textContent;

		expect(header).toBe('Product Name');
		expect(property).toBe('Cuidado con el peatón');
	});

	it('should emit click event when click icon', () => {
		const icon = fixture.debugElement.query(By.css('#icon_favorite'));

		component.clickAction.subscribe((data: { element: any; action: string }) => {
			expect(data.element).toEqual({
				id: '5',
				name: 'Cuidado con el peatón',
				brand: 'Liberty',
				'brand-image': 'brand_liberty.png',
				kind: 'Coche',
				'Kind-image': 'kind_car.png',
				price: '120'
			});
			expect(data.action).toBe('favorite');
		});

		icon.triggerEventHandler('click', 'favorite');
	});
});
