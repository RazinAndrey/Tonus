import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageLayoutComponent } from '../../shared/layouts/page-layout/page-layout.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
  imports: [PageLayoutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPage {}
