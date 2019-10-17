import { ClientI } from '../../interfaces/client-i';
import { StateClient } from '../enums/state-client.enum';

export class Client implements ClientI {
  id = '1';
  state: StateClient = StateClient.ACTIF;
  name = 'Client1';
  email = 'TEST';

  constructor(fields?: Partial<Client>) {
    if (fields) {
      // Not a deep copy
      Object.assign(this, fields);
    }
}
}
