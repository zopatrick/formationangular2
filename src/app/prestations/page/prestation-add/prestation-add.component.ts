import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrestationsService } from '../../services/prestations.service';

@Component({
  selector: 'app-prestation-add',
  templateUrl: './prestation-add.component.html',
  styleUrls: ['./prestation-add.component.scss']
})
export class PrestationAddComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private prestationsService: PrestationsService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  public add(item: any) {
    console.log('PrestationAddComponent =', item);
    this.prestationsService.add(item);
    // this.router.navigate(['prestations']);
    this.router.navigate(['../'], {relativeTo : this.route});
  }
}
