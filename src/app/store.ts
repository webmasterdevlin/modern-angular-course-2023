import { computed, signal } from '@angular/core';
import { Post, Todo, User } from './models';
import { getAxios } from './services/generic.service';

export type StoreType = {
  loading: boolean;
  todos: Todo[];
  users: User[];
  posts: Post[];
};

export let store = signal<StoreType>({
  loading: false,
  todos: [],
  users: [],
  posts: [],
});

export const totalObjects = computed(() => store().todos.length + store().posts.length);

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
