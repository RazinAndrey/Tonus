import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CardLayoutComponent } from '../../../../../../shared/layouts/card-layout/card-layout.component';

@Component({
  selector: 'app-profile-hero',
  imports: [CardLayoutComponent],
  templateUrl: './profile-hero.component.html',
  styleUrls: ['./profile-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileHeroComponent {
  readonly name = input.required<string>();
  readonly level = input('');
}
