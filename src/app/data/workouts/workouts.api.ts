import { Observable } from 'rxjs';

import { Workout } from './workout';

export abstract class WorkoutsApi {
  abstract list(): Observable<Workout[]>;
}
