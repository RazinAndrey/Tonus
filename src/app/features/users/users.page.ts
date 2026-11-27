import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { PageLayoutComponent } from '../../shared/layouts/page-layout/page-layout.component';

@Component({
  selector: 'app-users',
  templateUrl: 'users.page.html',
  imports: [PageLayoutComponent, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersPage {}
