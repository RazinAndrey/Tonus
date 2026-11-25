import { Provider } from '@angular/core';
import { MockTrainingsApiService } from '../core/api/trainings/mock-trainings-api.service';
import { TrainingsApi } from '../core/api/trainings/trainings-api';
import { TrainingsApiService } from '../core/api/trainings/trainings-api.service';
import { environment } from '../../environments/environment';
import { PROFILE_PROVIDERS } from './profile/profile.providers';

export const FEATURES_PROVIDERS: Provider[] = [
  ...PROFILE_PROVIDERS,
  {
    provide: TrainingsApi,
    useClass: environment.production ? TrainingsApiService : MockTrainingsApiService,
  },
];
