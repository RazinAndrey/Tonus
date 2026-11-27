import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IonSpinner } from '@ionic/angular';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  imports: [IonSpinner],
  host: { role: 'status', '[class]': "'spinner-' + color()" },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  readonly text = input('Загрузка...');
  readonly color = input<'neutral' | 'amber' | 'mint' | 'rose' | 'sky'>('neutral');
}
