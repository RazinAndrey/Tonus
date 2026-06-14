import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular/standalone';

import { AppMenuComponent, MenuItem } from '../ui/app-menu.component';

@Component({
  selector: 'app-main-layout',
  imports: [IonRouterOutlet, AppMenuComponent],
  template: `
    <app-menu [items]="menuItems" />
    <ion-router-outlet id="main-content" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  protected menuItems: MenuItem[] = [
    { label: 'Главная', route: '/home' },
    { label: 'Настройки', route: '/settings' },
  ];
}
