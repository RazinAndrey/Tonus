import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { PageLayoutComponent } from '../../../shared/layouts/page-layout/page-layout.component';
import { TrainingData } from '../../../core/models/training.model';

@Component({
  selector: 'app-training-form',
  templateUrl: './training-form.component.html',
  styleUrls: ['./training-form.component.scss'],
  imports: [PageLayoutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainingFormComponent {
  readonly trainingId = input<string | undefined>();
  readonly isEditMode = computed(() => Boolean(this.trainingId()));

  readonly trainingModel = signal<TrainingData>({
    id: '',
    title: '',
    short_description: '',
    description: '',
  });

  readonly trainingForm = form(this.trainingModel);
}
