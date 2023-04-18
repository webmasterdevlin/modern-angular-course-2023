import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [SharedModule],
  template: ` <p>todos works!</p> `,
})
export class TodosComponent {}
