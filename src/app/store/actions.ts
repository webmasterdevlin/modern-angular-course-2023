import { effect, inject, Injectable } from '@angular/core';
import { Post, Todo } from '../models';
import { HttpService } from '../services/http.service';
import { LocalStorageService } from '../utilities/local-storage.service';
import { State } from './';

@Injectable()
export class Actions {
  key = 'store';
  private _httpService = inject(HttpService);
  private _localStorageService = inject(LocalStorageService);
  private _stateService = inject(State);
  constructor() {
    effect(() => this._localStorageService.setItem(this.key, this._stateService.store()));
  }

  async fetchTodos() {
    this._stateService.store.update(store => ({ ...store, loading: true }));
    try {
      const { data } = await this._httpService.get<Todo[]>('todos');
      this._stateService.store.update(store => ({ ...store, todos: data }));
    } catch (e) {
      console.log(e);
    }
    this._stateService.store.update(store => ({ ...store, loading: false }));
  }

  async fetchPosts() {
    this._stateService.store.update(store => ({ ...store, loading: true }));
    try {
      const { data } = await this._httpService.get<Post[]>('posts');
      this._stateService.store.update(store => ({ ...store, posts: data }));
    } catch (e) {
      console.log(e);
    }
    this._stateService.store.update(store => ({ ...store, loading: false }));
  }

  async createPost(value: Post) {
    this._stateService.store.update(store => ({ ...store, loading: true }));
    try {
      const { data } = await this._httpService.post<Post>('posts', value);
      this._stateService.store.mutate(state => state.posts.push(data));
    } catch (e) {
      console.log(e);
    }
    this._stateService.store.update(store => ({ ...store, loading: false }));
  }

  async removeTodoById(id: number) {
    this._stateService.store.mutate(state => (state.todos = state.todos.filter(t => t.id !== id)));
  }
}
