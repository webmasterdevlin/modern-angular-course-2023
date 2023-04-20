import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { fetchTodos, removeTodoById, store } from '../store';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [SharedModule],
  template: `
    <h2>{{ globalStore().loading ? 'loading..' : 'Todos Works!' }}</h2>
    <ul>
      <li *ngFor="let todo of globalStore().todos">
        <span data-testid="todo-title" class="mr-5">{{ todo.title }}</span>
        <button class="text-red-400" (click)="handleRemoveTodoById(todo.id)">done</button>
      </li>
    </ul>
  `,
})
// hard to test component
export class TodosComponent {
  globalStore = store;

  async ngOnInit() {
    await fetchTodos();
  }

  handleRemoveTodoById = (id: number) => removeTodoById(id);
}
