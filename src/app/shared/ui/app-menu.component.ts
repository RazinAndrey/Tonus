import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonToolbar,
  IonAvatar,
} from '@ionic/angular/standalone';

export interface MenuItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-menu',
  imports: [
    RouterLink,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonMenuToggle,
    IonAvatar,
  ],
  template: `
    <ion-menu contentId="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-item lines="none">
            <ion-avatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
            <ion-label>
              <h2>H1 Heading</h2>
              <p>Paragraph</p>
            </ion-label>
          </ion-item>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list lines="none">
          @for (item of items(); track item.route) {
            <ion-menu-toggle>
              <ion-item [routerLink]="item.route">
                <ion-label>{{ item.label }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
          }
        </ion-list>
      </ion-content>
    </ion-menu>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppMenuComponent {
  readonly items = input.required<MenuItem[]>();
}
