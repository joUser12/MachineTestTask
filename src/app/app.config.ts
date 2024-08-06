import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import {
  provideCharts,
  withDefaultRegisterables,
} from 'ng2-charts';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(),
  provideHttpClient(withInterceptors([AuthInterceptor])),
  provideCharts(withDefaultRegisterables())
  ]
  // providers: [
  //   provideRouter(routes), provideHttpClient(),
  //   provideHttpClient(withInterceptors([AuthInterceptor])),
  // ]



};
