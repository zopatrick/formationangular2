import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from '../models/prestation';

@Component({
  selector: 'app-tableau-light',
  templateUrl: './tableau-light.component.html',
  styleUrls: ['./tableau-light.component.scss']
})
export class TableauLightComponent implements OnInit {
  @Input() headers: string[];
  @Input() collection: Prestation[]
  constructor() { }

  ngOnInit() {
  }

}
