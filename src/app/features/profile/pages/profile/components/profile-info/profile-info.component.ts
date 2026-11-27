import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IonItem, IonLabel, IonNote } from '@ionic/angular';
import { ListLayoutComponent } from '../../../../../../shared/layouts/list-layout/list-layout.component';
import { TranslatePipe } from '../../../../../../core/i18n/translate.pipe';

@Component({
  selector: 'app-profile-info',
  imports: [ListLayoutComponent, IonItem, IonLabel, IonNote, TranslatePipe],
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileInfoComponent {
  readonly email = input('');
  readonly phone = input('');
  readonly about = input('');
}
