import { Component, inject } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { State } from '../store';
import { FakeStore } from '../store/fake.store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  template: `
    <section>
      <h2>home</h2>
      <div>todos left: {{ store().todos.length }}</div>
      <div>posts left: {{ store().posts.length }}</div>
      <button (click)="add()">click me to increment</button>
    </section>
  `,
})
export class HomeComponent {
  stateService = inject(State);
  store = this.stateService.store;

  private _fakeStore = inject(FakeStore);
  add() {
    this._fakeStore.add();
  }
}
