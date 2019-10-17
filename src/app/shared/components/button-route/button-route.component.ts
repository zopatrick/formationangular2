import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-route',
  templateUrl: './button-route.component.html',
  styleUrls: ['./button-route.component.scss']
})
export class ButtonRouteComponent implements OnInit {
  @Input() label: string;
  @Input() route: string;
  @Input() href: string;
  constructor() { }

  ngOnInit() {
  }

}
