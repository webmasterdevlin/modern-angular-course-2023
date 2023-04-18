import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { store } from '../store';
import axios from 'axios';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [SharedModule],
  template: ` <p>posts works!</p> `,
})
export class PostsComponent {
  async ngOnInit() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    store.set({ ...store(), posts: data });
  }
}
