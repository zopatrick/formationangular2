import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/components/models/prestation';
import { FakePrestations } from './fake-prestations';

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

  // delete item in collection

  // get item by id from collection
}
