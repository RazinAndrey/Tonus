import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-page-layout',
  imports: [IonContent],
  host: { '[class.page-scrolled]': 'scrolled()' },
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLayoutComponent {
  readonly title = input('');
  readonly subtitle = input('');
  readonly fullscreen = input(true);
  readonly scrolled = signal(false);
}
