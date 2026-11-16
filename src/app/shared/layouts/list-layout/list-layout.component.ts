import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list-layout',
  imports: [IonList],
  templateUrl: './list-layout.component.html',
  styleUrls: ['./list-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListLayoutComponent {}
