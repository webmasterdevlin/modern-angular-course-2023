import { Component, inject } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import axios from 'axios';
import { store } from '../store';
import { JsonPlaceHolderService } from '../services/json-place-holder.service';
import { Todo } from '../models';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [SharedModule],
  template: `<h2>Todos Works!</h2> `,
})
export class TodosComponent {
  private _service = inject(JsonPlaceHolderService);

  async ngOnInit() {
    const { data } = await this._service.getAxios<Todo[]>('todos');
    store.set({ ...store(), todos: data });
  }
}
