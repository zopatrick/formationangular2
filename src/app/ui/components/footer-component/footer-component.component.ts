import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/prestations/services/version.service';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.scss']
})
export class FooterComponentComponent implements OnInit {
  public v: number ;
  constructor(private version: VersionService) {
    this.v = this.version.v;
   }

  ngOnInit() {
  }
}
