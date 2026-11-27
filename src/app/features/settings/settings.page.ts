import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IonItem, IonLabel, IonListHeader, IonNote, IonRadio, IonRadioGroup } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { LanguageService } from '../../core/services/language.service';
import { ThemeService } from '../../core/services/theme.service';
import { ListLayoutComponent } from '../../shared/layouts/list-layout/list-layout.component';
import { PageLayoutComponent } from '../../shared/layouts/page-layout/page-layout.component';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
  imports: [
    PageLayoutComponent,
    ListLayoutComponent,
    IonItem,
    IonLabel,
    IonListHeader,
    IonRadioGroup,
    IonRadio,
    IonNote,
    TranslatePipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsPage {
  private readonly themeService = inject(ThemeService);
  private readonly languageService = inject(LanguageService);

  protected readonly appVersion = environment.appVersion;

  protected readonly theme = this.themeService.theme;

  protected readonly language = this.languageService.language;

  protected setTheme(value: string): void {
    if (value === 'dark' || value === 'light') {
      this.themeService.setTheme(value);
    }
  }

  protected setLanguage(value: string): void {
    if (value === 'ru' || value === 'en') {
      this.languageService.setLanguage(value);
    }
  }
}
