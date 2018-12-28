import { Action } from '@ngrx/store';
import { Insurance } from '@core/models';

export const GET_INSURANCES = '[Insurance-UI] Get Insurances';
export const GET_INSURANCES_SUCCESS = '[Insurance-API] Get Insurances Success';
export const TOGGLE_FAVORITE_INSURANCE = '[Insurance-UI] Toggle Favorite Insurance';

export class GetInsurance implements Action {
	readonly type: string = GET_INSURANCES;
}

export class GetInsurancesSuccess implements Action {
	readonly type: string = GET_INSURANCES_SUCCESS;
	constructor(public payload: Insurance[]) {}
}

export class ToggleFavoriteInsurance implements Action {
	readonly type: string = TOGGLE_FAVORITE_INSURANCE;
	constructor(public payload: Insurance) {}
}

export type InsuranceActions = GetInsurance | GetInsurancesSuccess | ToggleFavoriteInsurance;
