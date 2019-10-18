import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/components/models/prestation';
import { FakePrestations } from './fake-prestations';
import { State } from 'src/app/shared/components/enums/state.enum';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  private pCollection: Observable<Prestation[]>;

  /* Injection de dépendance */
  constructor(private afs: AngularFirestore) {
    /* prestations  Nom défini dans firebase */
    this.itemsCollection = afs.collection<Prestation>('prestations');
    this.pCollection = this.itemsCollection.valueChanges().pipe(
      map((tab) => {
        return tab.map((obj) => new Prestation(obj));
      })
    );
  }

  // get collection
  get collection(): Observable<Prestation[]> {
    return this.pCollection;
  }

  // set collection
  set collection(prestations: Observable<Prestation[]>) {
    this.pCollection = prestations;
  }

  // update item in collection
  public update(item: Prestation, state: State) {
    // créer un
    // let newITem: Prestation = angular
    console.log('item before', item.state);
    item.state = state;
    console.log('item after', item.state);
  }

  public add(item: any) {

  }
  // delete item in collection



  // get item by id from collection
}
