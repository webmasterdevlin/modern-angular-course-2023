import { effect, inject, Injectable } from '@angular/core';
import { Post, Todo } from '../models';
import { HttpService } from '../services/http.service';
import { LocalStorageService } from '../utilities/local-storage.service';
import { StateService } from './state.service';

@Injectable()
export class ActionsService {
  key = 'store';
  private _httpService = inject(HttpService);
  private _localStorageService = inject(LocalStorageService);
  private _stateService = inject(StateService);
  constructor() {
    effect(() => this._localStorageService.setItem(this.key, this._stateService.store()));
  }

  async fetchTodos() {
    this._stateService.store.update(store => ({ ...store, loading: true }));
    try {
      const { data } = await this._httpService.get<Todo[]>('todos');
      this._stateService.store.update(store => ({ ...store, todos: data }));
    } catch (e) {}
    this._stateService.store.update(store => ({ ...store, loading: false }));
  }

  async fetchPosts() {
    this._stateService.store.update(store => ({ ...store, loading: true }));
    try {
      const { data } = await this._httpService.get<Post[]>('posts');
      this._stateService.store.set({ ...this._stateService.store(), posts: data });
    } catch (e) {}
    this._stateService.store.update(store => ({ ...store, loading: false }));
  }

  async createPost(value: Post) {
    const { data } = await this._httpService.post<Post>('posts', value);
    this._stateService.store.mutate(state => state.posts.push(data));
  }

  async removeTodoById(id: number) {
    this._stateService.store.mutate(state => (state.todos = state.todos.filter(t => t.id !== id)));
  }
}
