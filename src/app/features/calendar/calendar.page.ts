import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { LanguageService } from '../../core/services/language.service';
import { PageLayoutComponent } from '../../shared/layouts/page-layout/page-layout.component';

@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.page.html',
  styleUrls: ['calendar.page.scss'],
  imports: [PageLayoutComponent, IonDatetime],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarPage {
  protected readonly locale = inject(LanguageService).locale;
}
