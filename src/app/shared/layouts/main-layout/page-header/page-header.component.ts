import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonMenuButton,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import { filter, map, startWith } from 'rxjs';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';
import { TranslationKey } from '../../../../core/i18n/translations';
import { LanguageService } from '../../../../core/services/language.service';

@Component({
  selector: 'app-page-header',
  imports: [
    IonAvatar,
    IonButton,
    IonButtons,
    IonMenuButton,
    IonRouterLink,
    IonTitle,
    IonToolbar,
    RouterLink,
    TranslatePipe,
  ],
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderComponent {
  private readonly router = inject(Router);
  private readonly languageService = inject(LanguageService);

  private readonly routeInfo = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      startWith(null),
      map(() => {
        const routerState = this.router.routerState.snapshot;
        let route = routerState.root;

        while (route.firstChild) {
          route = route.firstChild;
        }

        return {
          titleKey: route.data['titleKey'] as TranslationKey | undefined,
          subtitleKey: route.data['subtitleKey'] as TranslationKey | undefined,
        };
      }),
    ),
    { initialValue: { titleKey: undefined, subtitleKey: undefined } },
  );

  protected readonly pageInfo = computed(() => {
    const { titleKey, subtitleKey } = this.routeInfo();
    return {
      title: titleKey ? this.languageService.translate(titleKey) : '',
      subtitle: subtitleKey ? this.languageService.translate(subtitleKey) : '',
    };
  });
}
