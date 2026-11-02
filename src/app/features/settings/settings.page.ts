import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonItem,
  IonToggle,
  IonListHeader,
  IonLabel,
  IonList,
  IonNote,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { environment } from '../../../environments/environment';
import { ThemeService } from '../../core/services/theme-service';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonItem,
    IonToggle,
    IonListHeader,
    IonLabel,
    IonList,
    IonNote,
    IonTitle,
    IonToolbar,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsPage {
  private theme = inject(ThemeService);
  protected readonly dark = this.theme.dark;
  protected readonly appVersion = environment.appVersion;

  protected toggleTheme(): void {
    this.theme.toggle();
  }
}
