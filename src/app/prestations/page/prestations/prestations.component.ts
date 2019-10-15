import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/components/models/prestation';

@Component({
  selector: 'app-prestations',
  templateUrl: './prestations.component.html',
  styleUrls: ['./prestations.component.scss']
})
export class PrestationsComponent implements OnInit {
  public collection: Prestation[];
  constructor(private prestationsService: PrestationsService) {

   }

  ngOnInit() {
    this.collection = this.prestationsService.collection;
  }

}
