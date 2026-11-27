import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { IonSpinner } from '@ionic/angular';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  imports: [IonSpinner],
  host: { role: 'status', '[class]': "'spinner-' + color()" },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  protected readonly languageService = inject(LanguageService);
  readonly text = input<string>();
  readonly color = input<'neutral' | 'amber' | 'mint' | 'rose' | 'sky'>('neutral');
}
