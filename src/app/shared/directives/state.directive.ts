import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnInit {
 @Input() appState: any;
  constructor() {
  }

   ngOnInit(): void {
    console.log('appState = ', this.appState);
  }
}
