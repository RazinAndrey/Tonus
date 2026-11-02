import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonMenu,
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { MenuWidgetComponent } from '../widgets/menu/menu-widget.component';

@Component({
  selector: 'app-main-layout',
  imports: [IonSplitPane, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, MenuWidgetComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {}
