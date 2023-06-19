import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Actions, State } from '../store';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [SharedModule],
  template: `
    <h1>{{ store().loading ? 'loading..' : 'Todos Works!' }}</h1>
    <ul>
      <li *ngFor="let todo of store().todos; let i = index">
        <span data-testid="todo-title" class="mr-5">{{ todo.title }}</span>
        <button class="text-red-400" (click)="handleRemoveTodoById(todo.id, i)">
          done
        </button>
      </li>
    </ul>
  `,
})
export class TodosComponent implements OnInit {
  private _stateService = inject(State);
  private _actionsService = inject(Actions);

  store = this._stateService.store; // NOTE: Don't do this._stateService.store(). Reactivity will be lost.

  async ngOnInit() {
    await this._actionsService.fetchTodos();
  }

  handleRemoveTodoById = (id: number, index: number) =>
    this._actionsService.removeTodoById(id, index);
}
