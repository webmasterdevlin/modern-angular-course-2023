import { Component, inject } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { store } from '../store';
import { Post } from '../models';
import { getAxios, postAxios } from '../services/generic.service';
import { FormBuilder, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [SharedModule],
  template: `<section>
    <h2>Posts Works!</h2>
    <form [formGroup]="postForm" (ngSubmit)="handleSubmitPost()">
      <label for="title"></label>
      <input type="text" id="title" formControlName="title" />
      <label for="body"></label>
      <input type="text" id="body" formControlName="body" />
      <button type="submit">Submit</button>
    </form>
    <ul>
      <li *ngFor="let post of globalState().posts.reverse()">
        <h3 data-testid="post-title">{{ post.title }}</h3>
      </li>
    </ul>
  </section>`,
})
export class PostsComponent {
  private _formBuilder = inject(FormBuilder);
  globalState = store;

  postForm = this._formBuilder.group({
    userId: [0],
    title: ['', [Validators.required]],
    body: ['', [Validators.required]],
  });

  async handleSubmitPost() {
    this.postForm.value.userId = 1;
    const { data } = await postAxios<Post>('posts', this.postForm.value as Post);
    // store().posts.concat(data)
    store.set({ ...store(), posts: [...store().posts, data] });
    this.postForm.reset();
  }

  async ngOnInit() {
    const { data } = await getAxios<Post[]>('posts');
    store.set({ ...store(), posts: data });
  }
}
