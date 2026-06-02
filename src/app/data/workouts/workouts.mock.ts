import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { WORKOUTS_MOCK } from '../mocks/workouts.data';
import { Workout } from './workout';
import { WorkoutsApi } from './workouts.api';

@Injectable()
export class WorkoutsMockApi extends WorkoutsApi {
  override list(): Observable<Workout[]> {
    return of(WORKOUTS_MOCK).pipe(delay(300));
  }
}
