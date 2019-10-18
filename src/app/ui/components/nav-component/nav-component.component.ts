import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/prestations/services/version.service';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.scss']
})
export class NavComponentComponent implements OnInit {
  constructor(private version: VersionService) { }

  ngOnInit() {
  }

  public upgradeVersion() {
    this.version.v$.next(this.version.v$.value + 1);
  }
}
