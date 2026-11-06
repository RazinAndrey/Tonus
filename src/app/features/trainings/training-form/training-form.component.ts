import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';
import { form } from '@angular/forms/signals';
import { PageLayoutComponent } from '../../../shared/layouts/page-layout/page-layout.component';
import { TrainingData } from '../../../core/api/trainings/training.model';

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

  trainingModel = signal<TrainingData>({
    id: '',
    title: '',
    short_description: '',
    description: '',
  });

  trainingForm = form(this.trainingModel);
}
