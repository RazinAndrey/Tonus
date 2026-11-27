import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TrainingsApi } from '../../core/api/trainings/trainings-api';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { PageLayoutComponent } from '../../shared/layouts/page-layout/page-layout.component';
import { ListLayoutComponent } from '../../shared/layouts/list-layout/list-layout.component';
import { AsyncPipe } from '@angular/common';
import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonItem,
  IonLabel,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add, chevronForwardOutline } from 'ionicons/icons';
import { SearchComponent } from '../../shared/ui/search/search.component';

@Component({
  selector: 'app-trainings',
  templateUrl: 'trainings.page.html',
  styleUrls: ['trainings.page.scss'],
  imports: [
    PageLayoutComponent,
    ListLayoutComponent,
    AsyncPipe,
    SearchComponent,
    RouterLink,
    IonFab,
    IonFabButton,
    IonIcon,
    IonItem,
    IonLabel,
    TranslatePipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainingsPage {
  constructor() {
    addIcons({ add, chevronForwardOutline });
  }

  protected readonly trainingsApi = inject(TrainingsApi);

  trainings$ = this.trainingsApi.list();
}
