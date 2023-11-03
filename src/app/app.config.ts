import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';

import { routes } from './app.routes';
import { LocalStorageService } from './utilities/local-storage.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withEnabledBlockingInitialNavigation()),
    { provide: LocalStorageService, useClass: LocalStorageService }, // providedIn: 'root', can also be used],
  ],
};
