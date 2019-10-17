import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/components/models/prestation';
import { State } from 'src/app/shared/components/enums/state.enum';
import { ActivatedRoute } from '@angular/router';

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
  public label = 'Ajouter une prestation';
  public title = 'Prestations';
  public subTitle = 'Toutes les prestations';

  // if < to angular 6
  public states = Object.values(State);
  public state: State;
  constructor(private prestationsService: PrestationsService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      console.log('data=', data);
      this.title = data.title;
      this.subTitle = data.subTitle;
    });
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
