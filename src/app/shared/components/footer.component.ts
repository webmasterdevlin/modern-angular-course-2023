import { Component, inject } from '@angular/core';
import { Getters, State } from '../../store';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="my-5 bg-white">
      <pre class="font-bold">
todos: {{ store().todos.length }}, posts: {{ store().posts.length }}</pre
      >
      <pre>combined posts and todos: {{ total() }}</pre>
    </footer>
  `,
})
export class FooterComponent {
  stateService = inject(State);
  store = this.stateService.store;
  private _gettersService = inject(Getters);
  total = this._gettersService.totalObjects;
}
