import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SharedModule } from '../shared/shared.module';
import { Post } from '../models';
import { combineLatestWith, debounceTime, distinctUntilChanged } from 'rxjs';
import { Actions, State } from '../store';

@UntilDestroy()
@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [SharedModule],
  template: `<section>
    <h1>Posts Works!</h1>
    <form [formGroup]="postForm" (ngSubmit)="handleSubmitPost()">
      <label for="title"></label>
      <input
        type="text"
        id="title"
        formControlName="title"
        class="bg-gray-50 border border-gray-300 rounded-lg"
      />
      <label for="body"></label>
      <input
        type="text"
        id="body"
        formControlName="body"
        class="bg-gray-50 border border-gray-300 rounded-lg"
      />
      <button type="submit" class="text-white bg-indigo-700 rounded-xl p-1">
        Submit
      </button>
    </form>
    <h3 class="my-100 text-indigo-900">{{ content }}</h3>
    <ul>
      <li *ngFor="let post of store().posts.reverse()">
        <h3 data-testid="post-title">{{ post.title }}</h3>
      </li>
    </ul>
  </section>`,
})
export class PostsComponent implements OnInit {
  content = '';
  private _stateService = inject(State);
  store = this._stateService.store; // NOTE: Don't do this._stateService.store()
  private _actionsService = inject(Actions);
  private _formBuilder = inject(FormBuilder);
  postForm = this._formBuilder.group({
    userId: [0],
    title: ['', [Validators.required]],
    body: ['', [Validators.required]],
  });

  async ngOnInit() {
    await this._actionsService.fetchPosts();
    this.watchForm();
  }

  async handleSubmitPost() {
    this.postForm.value.userId = 1;
    await this._actionsService.createPost(this.postForm.value as Post);
    this.postForm.reset();
  }

  // NOTE: Below is a use case for RxJS
  private watchForm() {
    const bodyValueChanges = this.postForm.get('body')?.valueChanges;

    if (bodyValueChanges) {
      this.postForm
        .get('title')
        ?.valueChanges.pipe(
          debounceTime(1000),
          distinctUntilChanged(),
          combineLatestWith(bodyValueChanges),
          untilDestroyed(this)
        )
        .subscribe(([title, body]) => {
          if (title && body) this.content = `${title}: "${body}"`;
          else this.content = '';
        });
    }
  }
}
