import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
} from '@ionic/angular/standalone';

import { WorkoutsApi } from '../../data/workouts/workouts.api';
import { AppHeaderComponent } from '../../shared/ui/app-header.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    DatePipe,
    AppHeaderComponent,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonNote,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  protected workouts = toSignal(inject(WorkoutsApi).list());
}
