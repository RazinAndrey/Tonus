import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonIcon, IonItem, IonLabel } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { chevronForwardOutline } from 'ionicons/icons';
import { ListLayoutComponent } from '../../shared/layouts/list-layout/list-layout.component';
import { PageLayoutComponent } from '../../shared/layouts/page-layout/page-layout.component';

interface SettingsItem {
  id: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
  imports: [PageLayoutComponent, ListLayoutComponent, IonItem, IonLabel, IonIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsPage {
  protected readonly items: readonly SettingsItem[] = [
    {
      id: 'notifications',
      title: 'Уведомления',
      description: 'Напоминания о тренировках',
    },
    {
      id: 'appearance',
      title: 'Внешний вид',
      description: 'Тема и оформление приложения',
    },
    {
      id: 'about',
      title: 'О приложении',
      description: 'Версия и поддержка',
    },
  ];

  constructor() {
    addIcons({ chevronForwardOutline });
  }
}
