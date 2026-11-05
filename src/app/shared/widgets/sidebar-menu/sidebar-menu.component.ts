import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonItem, IonLabel, IonList, IonRouterLink } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sidebar-menu',
  imports: [IonList, IonItem, IonLabel, RouterLink, IonRouterLink, RouterLinkActive],
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent {
  protected readonly links = [
    { label: 'Дашборд', url: '/dashboard' },
    { label: 'Настройки', url: '/settings' },
    { label: 'Профиль', url: '/profile' },
  ];
}
