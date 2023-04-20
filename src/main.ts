import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalStorageService } from './utilities/local-storage.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {
        path: '',
        loadComponent: () => import('./app/pages/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'users',
        loadComponent: () => import('./app/pages/users.component').then(m => m.UsersComponent),
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
  ],
}).catch(err => console.error(err));
