import {Insurance} from '@core/models/';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDialog} from '@angular/material';

import {Observable} from 'rxjs';

import {ListConfig} from '@shared/models';

import {ModalListComponent} from '../../components';
import {Select} from '@ngxs/store';
import {InsuranceState} from '@core/store/state';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesListComponent {

  @Select(InsuranceState.favoritesInsurances) favoritesList$: Observable<Insurance[]>;

  listConfig: ListConfig<Insurance> = {
    headers: [
      {
        title: 'Product Name',
        property: 'name'
      },
      {
        title: 'Insurance Company',
        property: 'brand'
      },
      {
        title: 'Policy Kind',
        property: 'kind'
      }
    ],
    images: ['brand-image'],
    actions: [],
    title: (item: Insurance) => `${item.brand} - ${item.kind}`
  };

  constructor(public dialog: MatDialog) {
  }


  openDialog(): void {
    this.dialog.open(ModalListComponent, {
      width: '50rem'
    });
  }
}
