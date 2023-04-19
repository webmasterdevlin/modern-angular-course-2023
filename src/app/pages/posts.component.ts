import { Component, inject } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { store } from '../store';
import { Post } from '../models';
import { getAxios, postAxios } from '../services/generic.service';
import {FormBuilder, FormGroupDirective, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [SharedModule],
  template: `<h2>Posts Works!</h2>
    <form [formGroup]="postForm" (ngSubmit)="handleSubmitPost()">
      <label for="title"></label>
      <input type="text" id="title" formControlName="title" />
      <label for="body"></label>
      <input type="text" id="body" formControlName="body" />
      <button type="submit">Submit</button>
    </form> `,
})
export class PostsComponent {
  private _formBuilder = inject(FormBuilder);

  postForm = this._formBuilder.group({
    userId: [0],
    title: ['', [Validators.required]],
    body: ['', [Validators.required]],
  });

  async handleSubmitPost() {
    this.postForm.value.userId = 1;
    await postAxios<Post>('posts', this.postForm.value as Post);
    this.postForm.reset();
  }

  async ngOnInit() {
    const { data } = await getAxios<Post[]>('posts');
    store.set({ ...store(), posts: data });
  }
}
