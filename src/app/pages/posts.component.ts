import { Component, inject } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { store } from '../store';
import { JsonPlaceHolderService } from '../services/json-place-holder.service';
import { Post } from '../models';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [SharedModule],
  template: ` <p>posts works!</p> `,
})
export class PostsComponent {
  private _service = inject(JsonPlaceHolderService);

  async ngOnInit() {
    const { data } = await this._service.getAxios<Post[]>('posts');
    store.set({ ...store(), posts: data });
  }
}
