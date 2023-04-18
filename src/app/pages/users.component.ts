import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import axios from 'axios';
import { store } from '../store';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [SharedModule],
  template: ` <p>users works!</p> `,
})
export class UsersComponent {
  async ngOnInit() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    store.set({ ...store(), users: data });
  }
}
