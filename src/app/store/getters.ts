import { computed } from '@angular/core';
import { store } from './state';

export const totalObjects = computed(() => store().todos.length + store().posts.length);
