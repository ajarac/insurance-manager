import {Action, NgxsOnInit, Selector, State, StateContext} from '@ngxs/store';

import {Insurance} from '@core/models';
import * as fromActions from '@core/store/actions/insurance.actions';
import {InsuranceService} from '@core/services';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';


export interface InsuranceStateModel {
  entities: { [id: string]: Insurance };
  ids: string[];
  favorites: string[];
}

@State<InsuranceStateModel>({
  name: 'insurance',
  defaults: {
    entities: {},
    ids: [],
    favorites: []
  }
})
export class InsuranceState implements NgxsOnInit {

  @Selector()
  static insurances({entities}: InsuranceStateModel): Insurance[] {
    return Object.keys(entities).map((key: string) => entities[key]);
  }

  @Selector()
  static favoritesInsurances({entities, favorites}: InsuranceStateModel): Insurance[] {
    return favorites.map((id: string) => entities[id]);
  }

  @Selector()
  static favoritesCount({favorites}: InsuranceStateModel): number {
    return favorites.length;
  }

  constructor(private insuranceService: InsuranceService) {
  }

  ngxsOnInit({dispatch}: StateContext<InsuranceStateModel>): void {
    dispatch(fromActions.GetInsurances);
  }

  @Action(fromActions.GetInsurances)
  getInsurances({dispatch}: StateContext<InsuranceState>): Observable<any> {
    return this.insuranceService.getInsurances().pipe(
      tap((insurances: Insurance[]) => dispatch(new fromActions.GetInsurancesSuccess(insurances)))
    );
  }

  @Action(fromActions.GetInsurancesSuccess)
  getInsurancesSuccess({patchState}: StateContext<InsuranceStateModel>, {insurances}: fromActions.GetInsurancesSuccess): void {
    const insurancesEntities: { [id: string]: Insurance } = insurances.reduce(
      (entities: { [id: string]: Insurance }, insurance: Insurance) => ({
        ...entities,
        [insurance.id]: insurance
      }), {});

    patchState({
      entities: insurancesEntities,
      ids: insurances.map((insurance: Insurance) => insurance.id),
    });
  }

  @Action(fromActions.ToggleFavoriteInsurance)
  toggleFavoriteInsurance(ctx: StateContext<InsuranceStateModel>, {insurance}: fromActions.ToggleFavoriteInsurance): void {
    let favorites: string[] = ctx.getState().favorites;

    if (insurance.favorite) {
      favorites = favorites.filter((id) => id !== insurance.id);
    } else {
      favorites.push(insurance.id);
    }

    const entities: { [id: string]: Insurance } = ctx.getState().entities;
    entities[insurance.id].favorite = !insurance.favorite;

    ctx.patchState({
      favorites,
      entities
    });
  }
}
