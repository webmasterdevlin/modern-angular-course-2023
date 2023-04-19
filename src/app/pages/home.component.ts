import { Component, inject } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { store } from '../store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  template: `
    <div>USERS: {{ globalState().users.length }}</div>
    <div>TODOS: {{ globalState().todos.length }}</div>
    <div>POSTS: {{ globalState().posts.length }}</div>
  `,
})
export class HomeComponent {
  globalState = store;
}
