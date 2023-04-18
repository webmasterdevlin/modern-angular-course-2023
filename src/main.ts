import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full',
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./app/pages/users.component').then((m) => m.UsersComponent),
      },
      {
        path: 'posts',
        loadComponent: () =>
          import('./app/pages/posts.component').then((m) => m.PostsComponent),
      },
      {
        path: 'todos',
        loadComponent: () =>
          import('./app/pages/todos.component').then((m) => m.TodosComponent),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ]),
  ],
}).catch((err) => console.error(err));
