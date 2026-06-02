import { ChangeDetectionStrategy, Component, booleanAttribute, input } from '@angular/core';
import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  imports: [IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton],
  template: `
    <ion-header>
      <ion-toolbar>
        @if (menu()) {
          <ion-buttons slot="start">
            <ion-menu-button />
          </ion-buttons>
        }
        <ion-title>{{ title() }}</ion-title>
      </ion-toolbar>
    </ion-header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeaderComponent {
  readonly title = input.required<string>();
  readonly menu = input(false, { transform: booleanAttribute });
}
