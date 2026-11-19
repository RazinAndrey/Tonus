import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageLayoutComponent } from '../../shared/layouts/page-layout/page-layout.component';
import { ProfileHeroComponent } from './profile-hero/profile-hero.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';

interface ProfileInfo {
  readonly name: string;
  readonly level: string;
  readonly email: string;
  readonly phone: string;
  readonly about: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
  imports: [PageLayoutComponent, ProfileHeroComponent, ProfileInfoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePage {
  protected readonly profile: ProfileInfo = {
    name: 'Андрей',
    level: 'Средний уровень',
    email: 'andrew@example.com',
    phone: '+7 999 123-45-67',
    about: 'Тренируюсь три раза в неделю, слежу за прогрессом и веду записи о занятиях.',
  };
}
