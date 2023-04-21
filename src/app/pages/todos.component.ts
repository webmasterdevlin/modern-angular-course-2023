import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Actions, State } from '../store';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [SharedModule],
  template: `
    <h2>{{ store().loading ? 'loading..' : 'Todos Works!' }}</h2>
    <ul>
      <li *ngFor="let todo of store().todos">
        <span data-testid="todo-title" class="mr-5">{{ todo.title }}</span>
        <button class="text-red-400" (click)="handleRemoveTodoById(todo.id)">done</button>
      </li>
    </ul>
  `,
})
export class TodosComponent implements OnInit {
  private _stateService = inject(State);
  store = this._stateService.store; // NOTE: Don't do this._stateService.store()
  private _actionsService = inject(Actions);
  async ngOnInit() {
    await this._actionsService.fetchTodos();
  }

  handleRemoveTodoById = (id: number) => this._actionsService.removeTodoById(id);
}
