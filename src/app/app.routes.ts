import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../app/pages/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'posts',
    loadComponent: () =>
      import('../app/pages/posts.component').then((m) => m.PostsComponent),
  },
  {
    path: 'todos',
    loadComponent: () =>
      import('../app/pages/todos.component').then((m) => m.TodosComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
