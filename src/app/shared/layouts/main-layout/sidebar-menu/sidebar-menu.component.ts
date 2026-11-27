import { Component } from '@angular/core';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';
import { TranslationKey } from '../../../../core/i18n/translations';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonIcon, IonItem, IonLabel, IonList, IonMenuToggle, IonRouterLink } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  barbellOutline,
  calendarOutline,
  gridOutline,
  peopleOutline,
  personOutline,
  settingsOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-sidebar-menu',
  imports: [
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    IonMenuToggle,
    RouterLink,
    IonRouterLink,
    RouterLinkActive,
    TranslatePipe,
  ],
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent {
  constructor() {
    addIcons({ barbellOutline, calendarOutline, gridOutline, peopleOutline, personOutline, settingsOutline });
  }

  protected readonly links = [
    { labelKey: 'nav.dashboard', url: '/dashboard', icon: 'grid-outline' },
    { labelKey: 'nav.trainings', url: '/trainings', icon: 'barbell-outline' },
    { labelKey: 'nav.calendar', url: '/calendar', icon: 'calendar-outline' },
    { labelKey: 'nav.users', url: '/users', icon: 'people-outline' },
    { labelKey: 'nav.settings', url: '/settings', icon: 'settings-outline' },
  ] satisfies { labelKey: TranslationKey; url: string; icon: string }[];
}
