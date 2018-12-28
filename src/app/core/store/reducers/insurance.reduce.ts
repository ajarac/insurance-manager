import { Insurance } from '@core/models/insurance.model';
import * as fromInsurances from '../actions/insurance.action';

const LOCALSTORAGE_FAVORITES = 'favorites';

export interface InsuranceState {
	entities: { [id: string]: Insurance };
	ids: string[];
	favorites: string[];
}

export const initialState: InsuranceState = {
	entities: {},
	ids: [],
	favorites: JSON.parse(localStorage.getItem(LOCALSTORAGE_FAVORITES)) || []
};

export function reducer(state: InsuranceState = initialState, action: fromInsurances.InsuranceActions): InsuranceState {
	switch (action.type) {
		case fromInsurances.GET_INSURANCES_SUCCESS: {
			const insurances: Insurance[] = (<fromInsurances.GetInsurancesSuccess>action).payload;
			insurances.forEach((insurance: Insurance) => (insurance.favorite = state.favorites.includes(insurance.id)));
			const entities: { [id: string]: Insurance } = insurances.reduce(
				(prev, insurance) => ({ ...prev, [insurance.id]: insurance }),
				{}
			);

			const ids: string[] = Object.keys(entities);

			return {
				...state,
				entities,
				ids
			};
		}

		case fromInsurances.TOGGLE_FAVORITE_INSURANCE: {
			const insurance: Insurance = (<fromInsurances.ToggleFavoriteInsurance>action).payload;
			let favorites: string[] = [ ...state.favorites ];

			if (insurance.favorite) {
				favorites = favorites.filter((id) => id !== insurance.id);
			} else {
				favorites.push(insurance.id);
			}

			const entities: { [id: string]: Insurance } = { ...state.entities };
			entities[insurance.id].favorite = !insurance.favorite;

			localStorage.setItem(LOCALSTORAGE_FAVORITES, JSON.stringify(favorites));
			return {
				...state,
				favorites,
				entities
			};
		}

		default: {
			return state;
		}
	}
}

export const getEntities = (state: InsuranceState) => state.entities;
export const getIds = (state: InsuranceState) => state.ids;
export const getFavorites = (state: InsuranceState) => state.favorites;
