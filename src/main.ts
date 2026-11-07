import { bootstrapApplication } from '@angular/platform-browser';
import { provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import {
  PreloadAllModules,
  RouteReuseStrategy,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
} from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { MockTrainingsApiService } from './app/core/api/trainings/mock-trainings-api.service';
import { TrainingsApi } from './app/core/api/trainings/trainings-api';
import { TrainingsApiService } from './app/core/api/trainings/trainings-api.service';
import { environment } from './environments/environment';

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection(),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideHttpClient(),
    {
      provide: TrainingsApi,
      useClass: environment.production ? TrainingsApiService : MockTrainingsApiService,
    },
    provideRouter(routes, withPreloading(PreloadAllModules), withComponentInputBinding()),
  ],
});
