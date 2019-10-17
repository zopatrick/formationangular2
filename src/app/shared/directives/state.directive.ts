import {
  Directive,
  Input,
  OnInit,
  HostBinding,
  OnChanges,
  SimpleChanges
} from '@angular/core';
@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: any;
  @HostBinding('class') hostElementClass: string;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.appState);
    this.hostElementClass = this.formatClass(this.appState);
  }

  private formatClass(state: any) {
    return `state-${state
      .normalize('NFD')
      .replace(/[\u0300-\u036f\s]/g, '')
      .toLowerCase()}`;
  }
}
