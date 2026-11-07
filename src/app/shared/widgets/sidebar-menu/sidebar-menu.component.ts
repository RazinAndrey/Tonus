import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonAvatar, IonIcon, IonItem, IonLabel, IonList, IonRouterLink } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { barbellOutline, calendarOutline, gridOutline, peopleOutline, settingsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-sidebar-menu',
  imports: [IonList, IonItem, IonIcon, IonAvatar, IonLabel, RouterLink, IonRouterLink, RouterLinkActive],
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent {
  constructor() {
    addIcons({ barbellOutline, calendarOutline, gridOutline, peopleOutline, settingsOutline });
  }

  protected readonly links = [
    { label: 'Дашборд', url: '/dashboard', icon: 'grid-outline' },
    { label: 'Тренировки', url: '/trainings', icon: 'barbell-outline' },
    { label: 'Календарь', url: '/calendar', icon: 'calendar-outline' },
    { label: 'Пользователи', url: '/users', icon: 'people-outline' },
    { label: 'Настройки', url: '/settings', icon: 'settings-outline' },
  ];
}
