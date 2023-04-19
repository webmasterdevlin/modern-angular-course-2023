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
      class="mb-2 mr-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
      *ngFor="let link of links"
      (click)="to(link.url)"
    >
      {{ link.name }}
    </button>
  `,
})
export class NavBarComponent {
  protected links = [
    {
      name: 'Home',
      url: '',
    },
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
