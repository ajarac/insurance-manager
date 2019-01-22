import { TableComponent } from './table.component';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material';

xdescribe('TableComponent', () => {
	let component: TableComponent<any>;

	describe('TableComponent Plain', () => {
		it('should set dataList in datasource on change lifecycle', () => {
			component = new TableComponent<any>();
			component.dataList = [
				{
					id: '1',
					name: 'Casa mia!',
					brand: 'Generali',
					'brand-image': 'brand_generali.png',
					kind: 'Hogar',
					'Kind-image': 'kind_home.png',
					price: '300'
				},
				{
					id: '2',
					name: 'No eres imortal',
					brand: 'Mapfre',
					'brand-image': 'brand_mapfre.png',
					kind: 'Vida',
					'Kind-image': 'kind_life.png',
					price: '100'
				},
				{
					id: '3',
					name: 'Panacea',
					brand: 'Zurich',
					'brand-image': 'brand_zurich.png',
					kind: 'Viaje',
					'Kind-image': 'kind_travel.png',
					price: '50'
				},
				{
					id: '4',
					name: '<mis_datos>',
					brand: 'AXA',
					'brand-image': 'brand_axa.png',
					kind: 'cybersecurity',
					'Kind-image': 'kind_cibersecurity.png',
					price: '1010'
				},
				{
					id: '5',
					name: 'Cuidado con el peatón',
					brand: 'Liberty',
					'brand-image': 'brand_liberty.png',
					kind: 'Coche',
					'Kind-image': 'kind_car.png',
					price: '120'
				}
			];

			component.ngOnChanges();

			expect(component.dataSource.data.length).toBe(5);
		});

		it('should build displayedColumns by only headers onInit lifecycle', () => {
			component = new TableComponent<any>();

			component.headers = [
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
			];

			component.ngOnInit();

			expect(component.displayedColumns.length).toBe(4);
		});

		it('should apply filter to datasource filter trim to lowercase', () => {
			component = new TableComponent<any>();

			component.applyFilter(' TestIng Filter  ');

			expect(component.dataSource.filter).toBe('testing filter');
		});
	});

	describe('TableComponent TestBed', () => {
		let fixture: ComponentFixture<TableComponent<any>>;

		beforeEach(
			async(() => {
				TestBed.configureTestingModule({
					imports: [ MatTableModule ],
					declarations: [ TableComponent ],
					schemas: [ NO_ERRORS_SCHEMA ]
				}).compileComponents();
			})
		);

		beforeEach(() => {
			fixture = TestBed.createComponent(TableComponent);
			component = fixture.componentInstance;
			component.dataList = [
				{
					id: '1',
					name: 'Casa mia!',
					brand: 'Generali',
					'brand-image': 'brand_generali.png',
					kind: 'Hogar',
					'Kind-image': 'kind_home.png',
					price: '300'
				},
				{
					id: '2',
					name: 'No eres imortal',
					brand: 'Mapfre',
					'brand-image': 'brand_mapfre.png',
					kind: 'Vida',
					'Kind-image': 'kind_life.png',
					price: '100'
				},
				{
					id: '3',
					name: 'Panacea',
					brand: 'Zurich',
					'brand-image': 'brand_zurich.png',
					kind: 'Viaje',
					'Kind-image': 'kind_travel.png',
					price: '50'
				},
				{
					id: '4',
					name: '<mis_datos>',
					brand: 'AXA',
					'brand-image': 'brand_axa.png',
					kind: 'cybersecurity',
					'Kind-image': 'kind_cibersecurity.png',
					price: '1010'
				},
				{
					id: '5',
					name: 'Cuidado con el peatón',
					brand: 'Liberty',
					'brand-image': 'brand_liberty.png',
					kind: 'Coche',
					'Kind-image': 'kind_car.png',
					price: '120'
				}
			];
			component.headers = [
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
			];

			component.actions = [ { icon: 'favorite', getColor: () => () => 'red' } ];
		});

		it('should create', () => {
			expect(component).toBeTruthy();
		});

		it('should emit click on action', () => {
			spyOn(component.clickAction, 'emit');

			fixture.detectChanges();
			component.onClickAction(
				{
					id: '1',
					name: 'Casa mia!',
					brand: 'Generali',
					'brand-image': 'brand_generali.png',
					kind: 'Hogar',
					'Kind-image': 'kind_home.png',
					price: '300'
				},
				'favorite'
			);

			expect(component.clickAction.emit).toHaveBeenCalledWith({
				element: {
					id: '1',
					name: 'Casa mia!',
					brand: 'Generali',
					'brand-image': 'brand_generali.png',
					kind: 'Hogar',
					'Kind-image': 'kind_home.png',
					price: '300'
				},
				action: 'favorite'
			});
		});
	});
});
