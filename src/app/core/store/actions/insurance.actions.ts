import {Insurance} from '@core/models';

export class GetInsurances {
  static readonly type = '[Insurance] Get Insurances';
}

export class GetInsurancesSuccess {
  static readonly type = '[Insurance] Get Insurances Success';

  constructor(public insurances: Insurance[]) {
  }
}

export class ToggleFavoriteInsurance {
  static readonly type = '[Insurance] Toggle Favorite Insurance';

  constructor(public insurance: Insurance) {
  }
}
