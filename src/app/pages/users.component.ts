import { Component, inject } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import axios from 'axios';
import { store } from '../store';
import { JsonPlaceHolderService } from '../services/json-place-holder.service';
import { User } from '../models';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [SharedModule],
  template: `<h2>Users Works!</h2> `,
})
export class UsersComponent {
  private _service = inject(JsonPlaceHolderService);

  async ngOnInit() {
    const { data } = await this._service.getAxios<User[]>('users');
    store.set({ ...store(), users: data });
  }
}
