import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list-layout',
  imports: [IonList],
  templateUrl: './list-layout.component.html',
  styleUrls: ['./list-layout.component.scss'],
  host: {
    '[class.list-layout--interactive]': 'interactive()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListLayoutComponent {
  readonly interactive = input(true);
}
