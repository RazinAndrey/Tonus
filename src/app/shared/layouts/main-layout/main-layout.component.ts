import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { trophy } from 'ionicons/icons';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonMenu,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterLink,
    IonSplitPane,
    IonMenu,
    IonHeader,
    IonIcon,
    IonToolbar,
    IonTitle,
    IonContent,
    IonRouterOutlet,
    PageHeaderComponent,
    SidebarMenuComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  constructor() {
    addIcons({ trophy });
  }
}
