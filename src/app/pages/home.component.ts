import { Component, inject } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { store } from '../store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  template: `
    <section>
      <div>users left: {{ globalState().users.length }}</div>
      <div>todos left: {{ globalState().todos.length }}</div>
      <div>posts left: {{ globalState().posts.length }}</div>
    </section>
  `,
})
export class HomeComponent {
  globalState = store;
}
