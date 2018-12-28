import { Action } from '@ngrx/store';
import { Insurance } from '@core/models';

export const GET_INSURANCES = '[Insurance-UI] Get Insurances';
export const GET_INSURANCES_SUCCESS = '[Insurance-API] Get Insurances Success';
export const SET_INSURANCE_FAVORITE = '[Insurance-UI] Set Insurance Favorite';
export const DELETE_INSURANCE_FAVORITE = '[Insurance-UI] Delete Insurance Favorite';

export class GetInsurance implements Action {
	readonly type: string = GET_INSURANCES;
}

export class GetInsurancesSuccess implements Action {
	readonly type: string = GET_INSURANCES_SUCCESS;
	constructor(public payload: Insurance[]) {}
}

export class SetInsuranceFavorite implements Action {
	readonly type: string = SET_INSURANCE_FAVORITE;
	constructor(public payload: Insurance) {}
}

export class DeleteInsuranceFavorite implements Action {
	readonly type: string = DELETE_INSURANCE_FAVORITE;
	constructor(public payload: Insurance) {}
}

export type InsuranceActions = GetInsurance | GetInsurancesSuccess | SetInsuranceFavorite | DeleteInsuranceFavorite;
