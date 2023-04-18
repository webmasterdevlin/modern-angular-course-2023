import { signal } from '@angular/core';
import { Post, Todo, User } from './models';

export type StoreType = {
  todos: Todo[];
  users: User[];
  posts: Post[];
};

export let store = signal<StoreType>({
  todos: [],
  users: [],
  posts: [],
});
