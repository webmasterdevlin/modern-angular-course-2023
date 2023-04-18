import { Component } from '@angular/core';
import { NavBarComponent } from './shared/components/nav-bar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-nav-bar></app-nav-bar>
    <div class="mx-auto">
      <router-outlet></router-outlet>
    </div>
  `,
  imports: [NavBarComponent, RouterModule],
})
export class AppComponent {}
