import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { environment } from '../../environments/environment';
import { WorkoutsApi } from './workouts/workouts.api';
import { WorkoutsHttpApi } from './workouts/workouts.http';
import { WorkoutsMockApi } from './workouts/workouts.mock';

export function provideData(): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: WorkoutsApi,
      useClass: environment.useMocks ? WorkoutsMockApi : WorkoutsHttpApi,
    },
  ]);
}
