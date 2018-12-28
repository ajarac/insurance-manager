import { Insurance } from '@core/models/insurance.model';
import * as fromInsurances from '../actions/insurance.action';

export interface InsuranceState {
	entities: { [id: string]: Insurance };
	ids: string[];
	favorites: string[];
}

export const initialState: InsuranceState = {
	entities: {},
	ids: [],
	favorites: []
};

export function reducer(state: InsuranceState = initialState, action: fromInsurances.InsuranceActions): InsuranceState {
	switch (action.type) {
		case fromInsurances.GET_INSURANCES_SUCCESS: {
			const insurances: Insurance[] = (<fromInsurances.GetInsurancesSuccess>action).payload;
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

		case fromInsurances.SET_INSURANCE_FAVORITE: {
			const insurance: Insurance = (<fromInsurances.SetInsuranceFavorite>action).payload;
			const favorites: string[] = [ ...state.favorites, insurance.id ];
			return {
				...state,
				favorites
			};
		}

		case fromInsurances.DELETE_INSURANCE_FAVORITE: {
			const insurance: Insurance = (<fromInsurances.DeleteInsuranceFavorite>action).payload;
			const favorites: string[] = [ ...state.favorites.filter((id) => id !== insurance.id) ];

			return {
				...state,
				favorites
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
