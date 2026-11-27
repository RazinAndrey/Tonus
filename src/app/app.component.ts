import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import { filter, startWith } from 'rxjs';
import { TranslationKey } from './core/i18n/translations';
import { LanguageService } from './core/services/language.service';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly languageService = inject(LanguageService);
  private readonly navigation = toSignal(
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), startWith(null)),
  );

  constructor() {
    inject(ThemeService);

    effect(() => {
      this.navigation();
      let route = this.router.routerState.snapshot.root;

      while (route.firstChild) {
        route = route.firstChild;
      }

      const titleKey = route.data['titleKey'] as TranslationKey | undefined;
      this.document.title = titleKey ? this.languageService.translate(titleKey) : 'Tonus';
    });
  }
}
