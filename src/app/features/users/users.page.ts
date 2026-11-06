import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageLayoutComponent } from '../../shared/layouts/page-layout/page-layout.component';

@Component({
  selector: 'app-users',
  templateUrl: 'users.page.html',
  imports: [PageLayoutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersPage {}
