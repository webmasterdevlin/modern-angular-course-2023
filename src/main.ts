import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { LocalStorageService } from './app/utilities/local-storage.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    { provide: LocalStorageService, useClass: LocalStorageService }, // providedIn: 'root', can also be used],
  ],
}).catch((err) => console.error(err));
