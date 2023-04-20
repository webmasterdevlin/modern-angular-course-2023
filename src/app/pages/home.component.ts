import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { store } from '../store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  template: `
    <section>
      <h2>home</h2>
      <div>users left: {{ globalState().users.length }}</div>
      <div>todos left: {{ globalState().todos.length }}</div>
      <div>posts left: {{ globalState().posts.length }}</div>
    </section>
  `,
})
export class HomeComponent {
  globalState = store;
}
