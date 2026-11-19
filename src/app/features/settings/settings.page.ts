import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { IonItem, IonLabel, IonListHeader, IonNote, IonRadio, IonRadioGroup } from '@ionic/angular';
import { environment } from '../../../environments/environment';
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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsPage {
  protected readonly appVersion = environment.appVersion;

  protected readonly theme = signal('dark');

  protected readonly language = signal('ru');
}
