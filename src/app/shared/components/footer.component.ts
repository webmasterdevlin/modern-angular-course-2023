import { Component, inject } from '@angular/core';
import { GettersService } from '../../store/getters.service';
import { StateService } from '../../store/state.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="my-5 bg-white">
      <pre class="font-bold">todos: {{ store().todos.length }}, posts: {{ store().posts.length }}</pre>
      <pre>combined posts and todos: {{ total }}</pre>
    </footer>
  `,
})
export class FooterComponent {
  stateService = inject(StateService);
  store = this.stateService.store;
  private _gettersService = inject(GettersService);
  total = this._gettersService.totalObjects();
}
