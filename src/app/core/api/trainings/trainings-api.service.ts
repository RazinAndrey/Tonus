import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TrainingData } from './training.model';

type TrainingPayload = Omit<TrainingData, 'id'>;

@Injectable({ providedIn: 'root' })
export class TrainingsApiService {
  private readonly http = inject(HttpClient);
  private readonly url = '/api/trainings';

  list(): Observable<TrainingData[]> {
    return this.http.get<TrainingData[]>(this.url);
  }

  get(id: string): Observable<TrainingData> {
    return this.http.get<TrainingData>(`${this.url}/${encodeURIComponent(id)}`);
  }

  create(training: TrainingPayload): Observable<TrainingData> {
    return this.http.post<TrainingData>(this.url, training);
  }

  update(id: string, training: Partial<TrainingPayload>): Observable<TrainingData> {
    return this.http.patch<TrainingData>(`${this.url}/${encodeURIComponent(id)}`, training);
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${encodeURIComponent(id)}`);
  }
}
