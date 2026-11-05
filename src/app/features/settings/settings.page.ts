import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageLayoutComponent } from '../../shared/layouts/page-layout/page-layout.component';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
  imports: [PageLayoutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsPage {}
