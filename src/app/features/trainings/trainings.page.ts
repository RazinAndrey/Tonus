import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TrainingsApi } from '../../core/api/trainings/trainings-api';
import { PageLayoutComponent } from '../../shared/layouts/page-layout/page-layout.component';
import { AsyncPipe } from '@angular/common';
import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonRouterLink,
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
    AsyncPipe,
    SearchComponent,
    RouterLink,
    IonRouterLink,
    IonFab,
    IonFabButton,
    IonIcon,
    IonList,
    IonItem,
    IonLabel,
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
