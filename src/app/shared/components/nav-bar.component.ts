import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../shared.module';
import { MenuComponent } from './menu.component';
import { State } from '../../store';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [SharedModule, MenuComponent],
  template: `
    <nav>
      <app-menu [label]="'home'" (handleClick)="to('/')"></app-menu>
      <app-menu [label]="'todos'" [counter]="store().todos.length" (handleClick)="to('todos')"></app-menu>
      <app-menu [label]="'posts'" [counter]="store().posts.length" (handleClick)="to('posts')"></app-menu>
    </nav>
  `,
})
export class NavBarComponent {
  stateService = inject(State);
  store = this.stateService.store;
  private _router = inject(Router);

  ngOnInit(): void {
    console.log('NavBarComponent');
  }

  async to(url: string) {
    await this._router.navigateByUrl(url);
  }
}
