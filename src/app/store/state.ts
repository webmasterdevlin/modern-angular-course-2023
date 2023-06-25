import { inject, Injectable, signal } from '@angular/core';
import { Post, Todo } from '../models';
import { LocalStorageService } from '../utilities/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class State {
  private key = 'store';
  private _localStorageService = inject(LocalStorageService);

  store = signal<StoreType>(initialStoreState);

  constructor() {
    const localStore = this._localStorageService.getItem<StoreType>(this.key);
    if (localStore) this.store.set(localStore);
  }
}

export interface StoreType {
  loading: boolean;
  error: string;
  todos: Todo[];
  posts: Post[];
}

const initialStoreState: StoreType = {
  loading: false,
  error: '',
  todos: [],
  posts: [],
};
