import { Component } from '@angular/core';
import { store } from 'src/app/store';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="my-5 bg-white">
      <pre class="font-bold">
users: {{ globalState().users.length }}, todos: {{ globalState().todos.length }}, posts: {{
          globalState().posts.length
        }}</pre
      >
    </footer>
  `,
})
export class FooterComponent {
  globalState = store;
}
