import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SharedModule } from '../shared/shared.module';
import { Post } from '../models';
import { combineLatestWith, debounceTime, distinctUntilChanged } from 'rxjs';
import { StateService } from '../store/state.service';
import { ActionsService } from '../store/actions.service';

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
      <li *ngFor="let post of store().posts.reverse()">
        <h3 data-testid="post-title">{{ post.title }}</h3>
      </li>
    </ul>
  </section>`,
})
export class PostsComponent implements OnInit {
  content = '';
  private _stateService = inject(StateService);
  store = this._stateService.store; // NOTE: Don't do this._stateService.store()
  private _actionsService = inject(ActionsService);
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
