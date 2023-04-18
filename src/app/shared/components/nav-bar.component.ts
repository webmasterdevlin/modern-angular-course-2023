import { Component, signal } from '@angular/core';
import { SharedModule } from '../shared.module';
import { Router } from '@angular/router';
import { store } from 'src/app/store';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [SharedModule],
  template: `
    <button
      class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
      *ngFor="let link of links"
      (click)="to(link.url)"
    >
      {{ link.name }}
    </button>
    <div>USERS: {{ globalState().users.length }}</div>
    <div>TODOS: {{ globalState().todos.length }}</div>
    <div>POSTS: {{ globalState().posts.length }}</div>
  `,
})
export class NavBarComponent {
  protected links = [
    {
      name: 'Users',
      url: 'users',
    },
    {
      name: 'Todo List',
      url: 'todos',
    },
    {
      name: 'Posts',
      url: 'posts',
    },
  ];
  constructor(private router: Router) {}
  globalState = store;

  ngOnInit(): void {
    console.log('NavBarComponent');
  }

  to(url: string) {
    this.router.navigateByUrl(url);
  }
}
