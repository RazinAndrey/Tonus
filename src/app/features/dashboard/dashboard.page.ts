import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardLayoutComponent } from '../../shared/layouts/card-layout/card-layout.component';
import { PageLayoutComponent } from '../../shared/layouts/page-layout/page-layout.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
  imports: [PageLayoutComponent, CardLayoutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPage {}
