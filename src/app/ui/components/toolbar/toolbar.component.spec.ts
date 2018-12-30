import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

describe('ToolbarComponent', () => {
	let component: ToolbarComponent;
	let fixture: ComponentFixture<ToolbarComponent>;

	@Component({
		selector: 'mat-icon',
		template: '<div></div>'
	})
	class MatIconComponent {}

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ ToolbarComponent, MatIconComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(ToolbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should emit drawer toggle when click button "burger"', () => {
		spyOn(component.drawerToggle, 'emit');
		const button = fixture.debugElement.query(By.css('button'));

		button.triggerEventHandler('click', null);

		expect(component.drawerToggle.emit).toHaveBeenCalled();
	});
});
