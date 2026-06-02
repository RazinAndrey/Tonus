import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { Workout } from './workout';
import { WorkoutsApi } from './workouts.api';

@Injectable()
export class WorkoutsHttpApi extends WorkoutsApi {
  private http = inject(HttpClient);

  override list(): Observable<Workout[]> {
    return this.http.get<Workout[]>(`${environment.apiUrl}/workouts`);
  }
}
