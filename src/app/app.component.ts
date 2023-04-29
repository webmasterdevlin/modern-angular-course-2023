import { Component } from '@angular/core';
import { NavBarComponent } from './shared/components/nav-bar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './shared/components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBarComponent, RouterModule, FooterComponent],
  template: `
    <app-nav-bar></app-nav-bar>
    <div class="container prose mx-auto">
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  `,
})
export class AppComponent {}
