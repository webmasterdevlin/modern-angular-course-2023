import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { JsonPlaceHolderService } from './app/services/json-place-holder.service';

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
    { provide: JsonPlaceHolderService, useClass: JsonPlaceHolderService },
  ],
}).catch(err => console.error(err));
