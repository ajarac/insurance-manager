import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { ApiService } from '@core/http/api.service';
import { Insurance } from '@core/models/';

@Injectable()
export class InsuranceService {
	constructor(private api: ApiService) {}

	getInsurances(): Observable<Insurance[]> {
		return this.api.get<Insurance[]>('InsurProducts.json');
	}
}
