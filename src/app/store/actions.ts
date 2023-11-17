import { effect, inject, Injectable } from '@angular/core';
import { Post, Todo } from '../models';
import { HttpService } from '../services/http.service';
import { LocalStorageService } from '../utilities/local-storage.service';
import { State } from './state';

@Injectable({
  providedIn: 'root',
})
export class Actions {
  private key = 'store';
  private _httpService = inject(HttpService);
  private _localStorageService = inject(LocalStorageService);
  private _stateService = inject(State);

  constructor() {
    effect(() => {
      console.log(this._stateService.store());
      this._localStorageService.setItem(this.key, this._stateService.store());
    });
  }

  // with side effect because this is with asynchronous call
  async fetchTodos() {
    this.enableLoading();
    try {
      const { data } = await this._httpService.get<Todo[]>('todos');
      this._stateService.store.update((state) => {
        state.todos = data;
        return { ...state };
      });
    } catch (e: any) {
      this.setError(e.message);
    }
    this.disableLoading();
  }

  async fetchPosts() {
    this.enableLoading();
    try {
      const { data } = await this._httpService.get<Post[]>('posts');
      this._stateService.store.update((state) => {
        state.posts = data;
        return { ...state };
      });
    } catch (e: any) {
      this.setError(e.message);
    }
    this.disableLoading();
  }

  // with no side effect because this has no asynchronous call
  removeTodoById(index: number) {
    this._stateService.store.update((state) => {
      state.todos.splice(index, 1);
      return { ...state };
    });
  }

  async createPost(value: Post) {
    this.enableLoading();
    try {
      const { data } = await this._httpService.post<Post>('posts', value);
      this._stateService.store.update((state) => {
        state.posts.push(data);
        return { ...state };
      });
    } catch (e: any) {
      this.setError(e.message);
    }
    this.disableLoading();
  }

  private enableLoading() {
    this._stateService.store.update((state) => {
      state.loading = true;
      state.error = '';
      return { ...state };
    });
  }

  private disableLoading() {
    this._stateService.store.update((state) => {
      state.loading = false;
      return { ...state };
    });
  }

  private setError(message: string) {
    this._stateService.store.update((state) => {
      state.error = message;
      return { ...state };
    });
  }
}
