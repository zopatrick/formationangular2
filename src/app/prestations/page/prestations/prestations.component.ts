import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/components/models/prestation';
import { State } from 'src/app/shared/components/enums/state.enum';

@Component({
  selector: 'app-prestations',
  templateUrl: './prestations.component.html',
  styleUrls: ['./prestations.component.scss']
})
export class PrestationsComponent implements OnInit {
  public collection: Prestation[];
  public headers: string[] = ['Type',
  'Client',
  'NbJours',
  'Tjm HT',
  'Total H',
  'Total TTC',
  'State'];

  // if < to angular 6
  public states = Object.values(State);
  public state: State;
  constructor(private prestationsService: PrestationsService) {
  }

  ngOnInit() {
    this.collection = this.prestationsService.collection;
    this.fillHeaders();
  }

  private fillHeaders() {
      this.headers = ['Type',
      'Client',
      'NbJours',
      'Tjm HT',
      'Total H',
      'Total TTC',
      'State'];
  }

  private changeState(p: Prestation, event) {
    console.log(event.target.value);
    this.prestationsService.update(p, event.target.value);
  }
}
