import { Client } from 'src/app/shared/components/models/client';
import { StateClient } from 'src/app/shared/components/enums/state-client.enum';

export const FakeClient: Client[] =
  [new Client({
    id : '1',
    state : StateClient.ACTIF,
    name : 'Carrefour',
    email : 'carrefour@carrefour.com'
    }),

  new Client({
    id : '2',
    state : StateClient.ACTIF,
    name : 'Auchan',
    email : 'auchan@auchan.com'
    })];




