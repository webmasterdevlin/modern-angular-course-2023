import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [SharedModule],
  template: ` <p>users works!</p> `,
})
export class UsersComponent {}
