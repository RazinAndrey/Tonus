import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { PageLayoutComponent } from '../../../../shared/layouts/page-layout/page-layout.component';
import { ProfileService } from '../../services/profile.service';
import { ProfileHeroComponent } from './components/profile-hero/profile-hero.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { ActionsProfileComponent } from './components/actions-profile/actions-profile.component';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
  imports: [
    PageLayoutComponent,
    ProfileHeroComponent,
    ProfileInfoComponent,
    ActionsProfileComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePage implements OnInit {
  readonly profileService = inject(ProfileService);

  ngOnInit(): void {
    this.profileService.loadProfile();
  }
}
