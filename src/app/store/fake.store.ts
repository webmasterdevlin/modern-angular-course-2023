import { Injectable, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FakeStore {
  count = signal(0);
  constructor() {
    effect(() => {
      alert(`The current count is: ${this.count()}`);
    });
  }
  add() {
    this.count.update((count) => count + 1);
  }
}
