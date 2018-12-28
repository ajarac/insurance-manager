import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Insurance } from '@core/models/';

import * as fromInsurance from '../reducers/insurance.reduce';

export const insuranceState = createFeatureSelector<fromInsurance.InsuranceState>('insurance');

export const getInsuranceEntities = createSelector(insuranceState, fromInsurance.getEntities);

export const getInsurancesList = createSelector(getInsuranceEntities, (diccInsurances: { [id: string]: Insurance }) =>
	Object.keys(diccInsurances).map((id: string) => diccInsurances[id])
);

export const getFavoritesIds = createSelector(insuranceState, fromInsurance.getFavorites);

export const getFavoritesList = createSelector(
	getInsurancesList,
	getFavoritesIds,
	(insurances: Insurance[], ids: string[]) => insurances.filter((insurance: Insurance) => ids.includes(insurance.id))
);
