import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, TitleStrategy } from '@angular/router';
import { distinctUntilChanged, filter, map, startWith } from 'rxjs';
import { addIcons } from 'ionicons';
import { trophy } from 'ionicons/icons';
import {
  IonAvatar,
  IonButton,
  IonRouterLink,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenu,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
} from '@ionic/angular/standalone';
import { SidebarMenuComponent } from '../../widgets/sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-main-layout',
  imports: [
    IonAvatar,
    IonButton,
    IonRouterLink,
    RouterLink,
    IonSplitPane,
    IonMenu,
    IonHeader,
    IonIcon,
    IonToolbar,
    IonTitle,
    IonContent,
    IonRouterOutlet,
    SidebarMenuComponent,
    IonButtons,
    IonMenuButton,
    AsyncPipe,
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  constructor() {
    addIcons({ trophy });
  }

  private readonly router = inject(Router);
  private readonly titleStrategy = inject(TitleStrategy);

  readonly pageTitle$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    startWith(null),
    map(() => this.titleStrategy.buildTitle(this.router.routerState.snapshot) ?? ''),
    distinctUntilChanged(),
  );
}
