import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  // BaliseHTML
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'crm-paris-oct';
}
