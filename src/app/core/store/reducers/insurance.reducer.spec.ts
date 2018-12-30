import { Insurance } from '@core/models/';
import { initialState, reducer } from './insurance.reduce';
import * as fromActions from '../actions/insurance.action';

describe('InsuranceReducer', () => {
	let INSURANCES: Array<Insurance>;

	beforeAll(() => {
		localStorage.clear();
	});

	afterAll(() => {
		localStorage.clear();
	});

	beforeEach(() => {
		localStorage.removeItem('favorites');
		INSURANCES = new Array(
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
		);
	});

	it('should set state to initialState when init store (no pass any state and action)', () => {
		const newState = reducer(undefined, { type: '' });

		expect(newState).toEqual(initialState);
	});

	it('should set insurances when receive GetInsurancesSuccess action', () => {
		const newState = reducer(undefined, new fromActions.GetInsurancesSuccess(INSURANCES));

		const insurance = INSURANCES[0];

		expect(Object.keys(newState.entities).length).toBe(INSURANCES.length);
		expect(newState.ids.length).toBe(INSURANCES.length);
		expect(newState.entities[insurance.id].name).toEqual(insurance.name);
	});

	it('should add insurance favorite to new state', () => {
		const state = reducer(undefined, new fromActions.GetInsurancesSuccess(INSURANCES));

		const insurance = INSURANCES[0];
		const newState = reducer(state, new fromActions.ToggleFavoriteInsurance(insurance));

		const id = insurance.id;
		expect(newState.favorites[0]).toBe(id);
		expect(newState.entities[id].favorite).toEqual(true);
	});

	it('should delete insurance favorite when pass toggle favorite of favaorite insurance', () => {
		const state = reducer(undefined, new fromActions.GetInsurancesSuccess(INSURANCES));

		const insurance = INSURANCES[0];
		// first set favorite
		const oldState = reducer(state, new fromActions.ToggleFavoriteInsurance(insurance));

		// then set not favorite
		const newState = reducer(oldState, new fromActions.ToggleFavoriteInsurance(insurance));

		const id = insurance.id;
		expect(newState.favorites.length).toBe(0);
		expect(newState.entities[id].favorite).toBe(false);
	});

});
