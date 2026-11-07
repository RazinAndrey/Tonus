import { Observable } from 'rxjs';
import { TrainingData, TrainingPayload } from '../../models/training.model';

export abstract class TrainingsApi {
  abstract list(): Observable<TrainingData[]>;
  abstract get(id: string): Observable<TrainingData>;
  abstract create(training: TrainingPayload): Observable<TrainingData>;
  abstract update(id: string, training: Partial<TrainingPayload>): Observable<TrainingData>;
  abstract remove(id: string): Observable<void>;
}
