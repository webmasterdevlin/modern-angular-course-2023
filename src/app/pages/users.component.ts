import { Component, inject } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { store } from '../store';
import { User } from '../models';
import { getAxios } from '../services/generic.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [SharedModule],
  template: `<h2>Users Works!</h2> `,
})
export class UsersComponent {

  async ngOnInit() {
    const { data } = await getAxios<User[]>('users');
    store.set({ ...store(), users: data });
  }
}
