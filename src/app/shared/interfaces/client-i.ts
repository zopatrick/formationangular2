import { StateClient } from '../components/enums/state-client.enum';

export interface ClientI {
  id: string;
  name: string;
  email: string;
  state: StateClient;
}
