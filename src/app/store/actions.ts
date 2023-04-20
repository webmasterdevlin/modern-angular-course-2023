import { store } from './state';
import { getAxios } from '../services/generic.service';
import { Todo } from '../models';

export const fetchTodos = async () => {
  store.set({ ...store(), loading: true });
  try {
    const { data } = await getAxios<Todo[]>('todos');
    store.set({ ...store(), todos: data });
  } catch (e) {}
  store.set({ ...store(), loading: false });
};

export const removeTodoById = (id: number) => {
  const todos = store().todos.filter(todo => todo.id !== id);
  store.set({ ...store(), todos });
};
