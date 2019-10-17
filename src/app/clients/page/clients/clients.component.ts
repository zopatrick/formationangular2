import { Component, OnInit } from '@angular/core';
import { StateClient } from 'src/app/shared/components/enums/state-client.enum';
import { ClientService } from 'src/app/prestations/services/client.service';
import { Client } from 'src/app/shared/components/models/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  public collection: Client[];
  public headers: string[] = ['id',
    'state',
    'name',
    'email'];
  public label = 'Ajouter un client';
  public title = 'Clients';
  public subTitle = 'Tous les clients';


  // if < to angular 6
  public states = Object.values(StateClient);
  public state: StateClient;
  constructor(private clientsService: ClientService) {
    this.collection = this.clientsService.collection;
  }

  ngOnInit() {
    this.collection = this.clientsService.collection;
  }

   private changeState(p: Client, event) {
    console.log(event.target.value);
    this.clientsService.update(p, event.target.value);
  }
}
