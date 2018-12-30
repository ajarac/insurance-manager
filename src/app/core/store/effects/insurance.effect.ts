import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { InsuranceService } from '@core/services';
import { Insurance } from '@core/models';

import * as insuranceActions from '../actions/insurance.action';
import { mergeMap, map } from 'rxjs/operators';

@Injectable()
export class InsuranceEffect {
	constructor(private actions: Actions, private insuranceService: InsuranceService) {}

	@Effect()
	loadInsurance$ = this.actions.pipe(
		ofType(insuranceActions.GET_INSURANCES),
		mergeMap(() => this.insuranceService.getInsurances()),
		map((insurances: Insurance[]) => new insuranceActions.GetInsurancesSuccess(insurances))
	);
}
