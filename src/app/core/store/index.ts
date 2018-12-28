import { ActionReducerMap } from '@ngrx/store';

import * as fromInsurance from './reducers/insurance.reduce';

export interface State {
	insurance: fromInsurance.InsuranceState;
}

export const reducers: ActionReducerMap<State> = {
	insurance: fromInsurance.reducer
};

export * from './actions';
export * from './selectors';
