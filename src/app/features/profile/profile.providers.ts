import { Provider } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpProfileApi } from './data-access/profile-api.http';
import { MockProfileApi } from './data-access/profile-api.mock';
import { ProfileApi } from './data-access/profile-api';

export const PROFILE_PROVIDERS: Provider[] = [
  {
    provide: ProfileApi,
    useClass: environment.useMockApi ? MockProfileApi : HttpProfileApi,
  },
];
