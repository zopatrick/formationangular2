import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/components/models/prestation';
import { FakePrestations } from './fake-prestations';
import { State } from 'src/app/shared/components/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
   private pCollection: Prestation[];
  constructor() {
    this.pCollection = FakePrestations;
  }

  // get collection
  get collection(): Prestation[] {
    return this.pCollection;
  }

  // set collection
  set collection(prestations: Prestation[]) {
    this.pCollection =  prestations;
  }

  // update item in collection
  public update(item: Prestation, state: State) {
      // créer un
      // let newITem: Prestation = angular
      console.log('item before', item.state);
      item.state = state;
      console.log('item after', item.state);
  }

  // delete item in collection



  // get item by id from collection
}
