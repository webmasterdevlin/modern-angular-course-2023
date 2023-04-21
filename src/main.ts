import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { LocalStorageService } from './app/utilities/local-storage.service';
import { HttpService } from './app/services/http.service';
import { ActionsService } from './app/store/actions.service';
import { GettersService } from './app/store/getters.service';
import { StateService } from './app/store/state.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {
        path: '',
        loadComponent: () => import('./app/pages/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'posts',
        loadComponent: () => import('./app/pages/posts.component').then(m => m.PostsComponent),
      },
      {
        path: 'todos',
        loadComponent: () => import('./app/pages/todos.component').then(m => m.TodosComponent),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ]),
    { provide: LocalStorageService, useClass: LocalStorageService },
    { provide: HttpService, useClass: HttpService },
    { provide: ActionsService, useClass: ActionsService },
    { provide: GettersService, useClass: GettersService },
    { provide: StateService, useClass: StateService },
  ],
}).catch(err => console.error(err));
