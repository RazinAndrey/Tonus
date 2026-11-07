import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TrainingData, TrainingPayload } from '../../models/training.model';
import { TrainingsApi } from './trainings-api';

@Injectable()
export class TrainingsApiService extends TrainingsApi {
  private readonly http = inject(HttpClient);
  private readonly url = '/api/trainings';

  list(): Observable<TrainingData[]> {
    return this.http.get<TrainingData[]>(this.url);
  }

  get(id: string): Observable<TrainingData> {
    return this.http.get<TrainingData>(`${this.url}/${id}`);
  }

  create(training: TrainingPayload): Observable<TrainingData> {
    return this.http.post<TrainingData>(this.url, training);
  }

  update(id: string, training: Partial<TrainingPayload>): Observable<TrainingData> {
    return this.http.patch<TrainingData>(`${this.url}/${id}`, training);
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
