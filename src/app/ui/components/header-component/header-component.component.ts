import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/prestations/services/version.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {
  public title = 'Formation \'s app';
  public v$: BehaviorSubject<number>;
  constructor(private version: VersionService) {
    this.v$ = this.version.v$;
   }

  ngOnInit() {
    this.v$ = this.version.v$;
  }
}
