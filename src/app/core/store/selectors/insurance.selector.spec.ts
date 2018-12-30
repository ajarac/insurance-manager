import { InsuranceState } from './../reducers/insurance.reduce';

import * as fromSelectors from './insurance.selector';

describe('InsuranceSelector', () => {
	let state: InsuranceState;

	beforeEach(() => {
		state = {
			ids: [ '1', '2', '3', '4', '5' ],
			favorites: [ '1', '2' ],
			entities: {
				'1': {
					id: '1',
					name: 'Casa mia!',
					brand: 'Generali',
					'brand-image': 'brand_generali.png',
					kind: 'Hogar',
					'Kind-image': 'kind_home.png',
					price: '300'
				},
				'2': {
					id: '2',
					name: 'No eres imortal',
					brand: 'Mapfre',
					'brand-image': 'brand_mapfre.png',
					kind: 'Vida',
					'Kind-image': 'kind_life.png',
					price: '100'
				},
				'3': {
					id: '3',
					name: 'Panacea',
					brand: 'Zurich',
					'brand-image': 'brand_zurich.png',
					kind: 'Viaje',
					'Kind-image': 'kind_travel.png',
					price: '50'
				},
				'4': {
					id: '4',
					name: '<mis_datos>',
					brand: 'AXA',
					'brand-image': 'brand_axa.png',
					kind: 'cybersecurity',
					'Kind-image': 'kind_cibersecurity.png',
					price: '1010'
				},
				'5': {
					id: '5',
					name: 'Cuidado con el peatón',
					brand: 'Liberty',
					'brand-image': 'brand_liberty.png',
					kind: 'Coche',
					'Kind-image': 'kind_car.png',
					price: '120'
				}
			}
		};
	});

	it('should return insurances entities by state', () => {
		const entities = fromSelectors.getInsuranceEntities.projector(state);

		expect(Object.keys(entities).length).toBe(5);
	});

	it('should return insurances list by entities', () => {
		const entities = fromSelectors.getInsuranceEntities.projector(state);
		const list = fromSelectors.getInsurancesList.projector(entities);

		expect(list.length).toBe(5);
	});

	it('should return list of favorites ids by state', () => {
		const ids = fromSelectors.getFavoritesIds.projector(state);

		expect(ids).toEqual([ '1', '2' ]);
	});

	it('should return list of favorites insurances', () => {
		const entities = fromSelectors.getInsuranceEntities.projector(state);
		const insuranceList = fromSelectors.getInsurancesList.projector(entities);
		const favoritesIds = fromSelectors.getFavoritesIds.projector(state);

		const favoritesList = fromSelectors.getFavoritesList.projector(insuranceList, favoritesIds);

		expect(favoritesList.length).toBe(2);
		const id = favoritesList[0].id;
		expect(state.entities[id]).toEqual(favoritesList[0]);
	});
});
