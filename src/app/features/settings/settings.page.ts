import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  IonContent,
  IonItem,
  IonToggle,
  IonListHeader,
  IonLabel,
  IonList,
  IonNote,
} from '@ionic/angular/standalone';

import { environment } from '../../../environments/environment';
import { ThemeService } from '../../core/services/theme-service';
import { AppHeaderComponent } from '../../shared/ui/app-header.component';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
  imports: [
    AppHeaderComponent,
    IonContent,
    IonItem,
    IonToggle,
    IonListHeader,
    IonLabel,
    IonList,
    IonNote,
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
