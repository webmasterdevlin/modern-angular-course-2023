import { Component, inject } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StateService } from '../store/state.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  template: `
    <section>
      <h2>home</h2>
      <div>todos left: {{ store().todos.length }}</div>
      <div>posts left: {{ store().posts.length }}</div>
    </section>
  `,
})
export class HomeComponent {
  stateService = inject(StateService);
  store = this.stateService.store;
}
