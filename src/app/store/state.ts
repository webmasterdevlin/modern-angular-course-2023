import {effect, signal} from '@angular/core';
import { Post, Todo, User } from '../models';

export type StoreType = {
  loading: boolean;
  todos: Todo[];
  users: User[];
  posts: Post[];
};

const initialStoreState: StoreType = {
  loading: false,
  todos: [],
  users: [],
  posts: [],
};
// you can write multiple signals for cohesion
export let store = signal<StoreType>(initialStoreState);
