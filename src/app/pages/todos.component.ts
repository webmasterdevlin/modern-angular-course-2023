import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Actions, State } from '../store';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [SharedModule],
  template: `<h1>{{ store().loading ? 'loading..' : 'Todos Works!' }}</h1>
  <ul>
    @for (todo of store().todos; track todo.id; let idx = $index, e = $even) {
    <li>
      <span data-testid="todo-title" class="mr-5">{{ todo.title }}</span>
      <button class="text-red-400" (click)="handleRemoveTodoById(idx)">
        done
      </button>
    </li>
    }
  </ul>`,
})
export class TodosComponent implements OnInit {
  private _stateService = inject(State);
  private _actionsService = inject(Actions);

  store = this._stateService.store; // NOTE: Don't do this._stateService.store(). Reactivity will be lost.

  async ngOnInit() {
    await this._actionsService.fetchTodos();
  }

  handleRemoveTodoById = (index: number) =>
    this._actionsService.removeTodoById(index);
}
