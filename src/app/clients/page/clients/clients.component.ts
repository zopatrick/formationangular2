import { Component, OnInit } from '@angular/core';
import { StateClient } from 'src/app/shared/components/enums/state-client.enum';
import { ClientService } from 'src/app/prestations/services/client.service';
import { Client } from 'src/app/shared/components/models/client';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private clientsService: ClientService,
              private route: ActivatedRoute) {
    this.collection = this.clientsService.collection;
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      console.log('data client=', data);
      this.title = data.title;
      this.subTitle = data.subTitle;
    });
    this.collection = this.clientsService.collection;
  }

   public changeState(p: Client, event) {
    console.log(event.target.value);
    this.clientsService.update(p, event.target.value);
  }
}
