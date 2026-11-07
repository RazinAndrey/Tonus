import { Injectable } from '@angular/core';
import { Observable, defer, of, throwError } from 'rxjs';
import { TrainingData, TrainingPayload } from '../../models/training.model';
import { TrainingsApi } from './trainings-api';

@Injectable()
export class MockTrainingsApiService extends TrainingsApi {
  private readonly trainings: TrainingData[] = [
    {
      id: '1',
      title: 'Утренняя разминка',
      short_description: 'Лёгкая тренировка для начала дня',
      description: 'Разомнитесь перед основными делами и настройтесь на активный день.',
    },
    {
      id: '2',
      title: 'Силовая тренировка',
      short_description: 'Упражнения на всё тело',
      description: 'Выполните упражнения для основных групп мышц.',
    },
  ];

  list(): Observable<TrainingData[]> {
    return defer(() => of(this.trainings.map((training) => ({ ...training }))));
  }

  get(id: string): Observable<TrainingData> {
    return defer(() => {
      const training = this.trainings.find((item) => item.id === id);
      return training ? of({ ...training }) : this.notFound(id);
    });
  }

  create(training: TrainingPayload): Observable<TrainingData> {
    return defer(() => {
      const created: TrainingData = { ...training, id: crypto.randomUUID() };
      this.trainings.push(created);
      return of({ ...created });
    });
  }

  update(id: string, training: Partial<TrainingPayload>): Observable<TrainingData> {
    return defer(() => {
      const index = this.trainings.findIndex((item) => item.id === id);
      if (index === -1) return this.notFound(id);

      const updated = { ...this.trainings[index], ...training };
      this.trainings[index] = updated;
      return of({ ...updated });
    });
  }

  remove(id: string): Observable<void> {
    return defer(() => {
      const index = this.trainings.findIndex((item) => item.id === id);
      if (index === -1) return this.notFound(id);

      this.trainings.splice(index, 1);
      return of(undefined);
    });
  }

  private notFound(id: string): Observable<never> {
    return throwError(() => new Error(`Training ${id} not found`));
  }
}
