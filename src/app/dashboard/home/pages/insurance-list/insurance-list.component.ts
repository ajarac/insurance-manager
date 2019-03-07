import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Select} from '@ngxs/store';
// Core
import {Insurance} from '@core/models';
import {InsuranceState} from '@core/store/state';
// Shared
import {ListConfig} from '@shared/models';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InsuranceListComponent {
  @Select(InsuranceState.insurances) insuranceList$: Observable<Insurance[]>;

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
      },
      {
        title: 'Price',
        property: 'price'
      }
    ],
    images: ['brand-image'],
    actions: [],
    title: (item: Insurance) => `${item.brand} - ${item.kind}`
  };

}
