import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { PageLayoutComponent } from '../../../../shared/layouts/page-layout/page-layout.component';
import { ProfileService } from '../../services/profile.service';
import { ProfileHeroComponent } from './components/profile-hero/profile-hero.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { ProfileActionsComponent } from './components/profile-actions/profile-actions.component';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';
import { SpinnerComponent } from '../../../../shared/ui/spinner/spinner.component';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
  imports: [
    PageLayoutComponent,
    ProfileHeroComponent,
    ProfileInfoComponent,
    ProfileActionsComponent,
    ButtonComponent,
    SpinnerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePage implements OnInit {
  private readonly profileService = inject(ProfileService);

  protected readonly profile = this.profileService.profile;
  protected readonly loading = this.profileService.loading;
  protected readonly loadError = this.profileService.loadError;

  ngOnInit(): void {
    if (!this.profile()) {
      void this.profileService.loadProfile();
    }
  }

  protected reload(): void {
    void this.profileService.loadProfile();
  }
}
