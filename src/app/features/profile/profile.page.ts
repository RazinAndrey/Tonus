import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonInput } from '@ionic/angular/standalone';
import { PageLayoutComponent } from '../../shared/layouts/page-layout/page-layout.component';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
  imports: [PageLayoutComponent, IonInput],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePage {}
