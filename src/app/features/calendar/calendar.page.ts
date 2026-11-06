import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageLayoutComponent } from '../../shared/layouts/page-layout/page-layout.component';

@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.page.html',
  styleUrls: ['calendar.page.scss'],
  imports: [PageLayoutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarPage {}
