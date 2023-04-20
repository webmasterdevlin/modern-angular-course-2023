import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SharedModule } from '../shared/shared.module';
import { store } from '../store';
import { Post } from '../models';
import { getAxios, postAxios } from '../services/generic.service';
import { combineLatestWith, debounceTime, distinctUntilChanged } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [SharedModule],
  template: `<section>
    <h2>Posts Works!!</h2>
    <form [formGroup]="postForm" (ngSubmit)="handleSubmitPost()">
      <label for="title"></label>
      <input type="text" id="title" formControlName="title" />
      <label for="body"></label>
      <input type="text" id="body" formControlName="body" />
      <button type="submit">Submit</button>
    </form>
    <h3 class="my-100 text-indigo-900">{{ content }}</h3>
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
  content = '';

  postForm = this._formBuilder.group({
    userId: [0],
    title: ['', [Validators.required]],
    body: ['', [Validators.required]],
  });

  async handleSubmitPost() {
    this.postForm.value.userId = 1;
    const { data } = await postAxios<Post>('posts', this.postForm.value as Post);
    store.set({ ...store(), posts: [...store().posts, data] });
    this.postForm.reset();
  }

  async ngOnInit() {
    const { data } = await getAxios<Post[]>('posts');
    store.set({ ...store(), posts: data });

    this.watchForm();
  }

  // below is a use case for RxJS
  private watchForm() {
    this.postForm
      .get('title')
      ?.valueChanges.pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        combineLatestWith(this.postForm.get('body')?.valueChanges!),
        untilDestroyed(this),
      )
      .subscribe(([title, body]) => {
        if (title && body) this.content = `${title}: "${body}"`;
        else this.content = '';
      });
  }
}
