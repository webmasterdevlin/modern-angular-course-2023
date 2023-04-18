import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [SharedModule],
  template: ` <p>posts works!</p> `,
})
export class PostsComponent {}
