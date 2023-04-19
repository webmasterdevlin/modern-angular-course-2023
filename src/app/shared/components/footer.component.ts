import { Component } from '@angular/core';
import { store, totalObjects } from 'src/app/store';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="my-5 bg-white">
      <pre class="font-bold">
users: {{ globalStore().users.length }}, todos: {{ globalStore().todos.length }}, posts: {{
          globalStore().posts.length
        }}</pre
      >
      <pre>combined posts and todos: {{ total() }}</pre>
    </footer>
  `,
})
export class FooterComponent {
  globalStore = store;
  total = totalObjects;
}
