import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonItem, IonLabel, IonList, IonRouterLink } from '@ionic/angular/standalone';

@Component({
  selector: 'app-menu-widget',
  imports: [IonList, IonItem, IonLabel, RouterLink, IonRouterLink],
  templateUrl: './menu-widget.component.html',
  styleUrls: ['./menu-widget.component.scss'],
})
export class MenuWidgetComponent {
  protected readonly links = [
    { label: 'Дашборд', url: '/dashboard' },
    { label: 'Настройки', url: '/settings' },
  ];
}
