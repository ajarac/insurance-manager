import { Insurance } from '@core/models';
import { ApiService } from '@core/http/api.service';

import { InsuranceService } from './insurance.service';
import { TestBed, async } from '@angular/core/testing';
import { of } from 'rxjs';

describe('InsuranceService', () => {
	let mockApiService: ApiService;
	let service: InsuranceService;
	let INSURANCES: Insurance[];

	beforeEach(() => {
		INSURANCES = [
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

		mockApiService = jasmine.createSpyObj([ 'get' ]);

		TestBed.configureTestingModule({
			providers: [ InsuranceService, { provide: ApiService, useValue: mockApiService } ]
		});

		service = TestBed.get(InsuranceService);
	});

	it('should call api get with parameter of object json', () => {
		(<any>mockApiService.get).and.returnValue(of(INSURANCES));

		service.getInsurances().subscribe((insurances: Insurance[]) => expect(insurances.length).toBe(5));
		expect(mockApiService.get).toHaveBeenCalledWith('InsurProducts.json');
	});
});
