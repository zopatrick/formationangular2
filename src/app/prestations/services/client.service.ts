import { Injectable } from '@angular/core';
import { StateClient } from 'src/app/shared/components/enums/state-client.enum';
import { Client } from 'src/app/shared/components/models/client';
import { FakeClient } from './fake-client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private pCollection: Client[];

  constructor() {
    this.pCollection = FakeClient;
  }

  // get collection
  get collection(): Client[] {
    return this.pCollection;
  }

  // set collection
  set collection(clients: Client[]) {
    this.pCollection =  clients;
  }

  // update item in collection
  public update(item: Client, state: StateClient) {
      // créer un
      // let newITem: Prestation = angular
      console.log('item before', item.state);
      item.state = state;
      console.log('item after', item.state);
  }

  // delete item in collection



  // get item by id from collection
}
