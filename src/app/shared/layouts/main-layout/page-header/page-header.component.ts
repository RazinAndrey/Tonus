import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, TitleStrategy } from '@angular/router';
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonMenuButton,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import { distinctUntilChanged, filter, map, startWith } from 'rxjs';

@Component({
  selector: 'app-page-header',
  imports: [
    AsyncPipe,
    IonAvatar,
    IonButton,
    IonButtons,
    IonMenuButton,
    IonRouterLink,
    IonTitle,
    IonToolbar,
    RouterLink,
  ],
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderComponent {
  private readonly router = inject(Router);
  private readonly titleStrategy = inject(TitleStrategy);

  protected readonly pageTitle$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    startWith(null),
    map(() => this.titleStrategy.buildTitle(this.router.routerState.snapshot) ?? ''),
    distinctUntilChanged(),
  );
}
