import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-card-layout',
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent],
  templateUrl: './card-layout.component.html',
  styleUrls: ['./card-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardLayoutComponent {
  readonly title = input.required<string>();
  readonly subtitle = input('');
}
