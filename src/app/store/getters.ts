import { computed, inject, Injectable } from '@angular/core';
import { State } from './';

@Injectable()
export class Getters {
  private _stateService = inject(State);

  totalObjects = computed(() => this._stateService.store().todos.length + this._stateService.store().posts.length);
}
