import { signal } from '@angular/core';

export let store = signal({
  x: 'defaultX',
  y: 'defaultY',
  z: 'defaultZ',
  todos: [],
  users: [],
  posts: [],
});
