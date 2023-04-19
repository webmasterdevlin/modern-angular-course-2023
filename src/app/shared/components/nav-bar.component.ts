import { Component, inject, signal } from '@angular/core';
import { SharedModule } from '../shared.module';
import { Router } from '@angular/router';
import { store } from 'src/app/store';
import { MenuComponent } from './menu.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [SharedModule, MenuComponent],
  template: `
    <nav>
      <app-menu [label]="'home'" (handleClick)="to('/')"></app-menu>
      <app-menu [label]="'users'" [counter]="globalState().users.length" (handleClick)="to('users')"></app-menu>
      <app-menu [label]="'todos'" [counter]="globalState().todos.length" (handleClick)="to('todos')"></app-menu>
      <app-menu [label]="'posts'" [counter]="globalState().posts.length" (handleClick)="to('posts')"></app-menu>
    </nav>
  `,
})
export class NavBarComponent {
  private _router = inject(Router);
  globalState = store;

  ngOnInit(): void {
    console.log('NavBarComponent');
  }

  to(url: string) {
    this._router.navigateByUrl(url);
  }
}
