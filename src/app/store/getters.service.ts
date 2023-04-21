import { computed, inject, Injectable } from '@angular/core';
import { StateService } from './state.service';

@Injectable()
export class GettersService {
  private _stateService = inject(StateService);

  totalObjects = computed(() => this._stateService.store().todos.length + this._stateService.store().posts.length);
}
