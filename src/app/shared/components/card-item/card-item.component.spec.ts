import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemComponent } from './card-item.component';

describe('CardItemComponent', () => {
	let component: CardItemComponent<any>;
	let fixture: ComponentFixture<CardItemComponent<any>>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ CardItemComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(CardItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});