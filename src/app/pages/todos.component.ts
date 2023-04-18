import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import axios from 'axios';
import { store } from '../store';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [SharedModule],
  template: ` <p>todos works!</p> `,
})
export class TodosComponent {
  async ngOnInit() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    );
    store.set({ ...store(), todos: data });
  }
}
