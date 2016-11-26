import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ADD_FEED, REMOVE_FEED, ADD_FEED_COMMENT } from '../store/feed/feed.actions';
import { IAppState } from "../store";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent {
  form: FormGroup;

  feeds$: Observable<{}>;

  constructor(public fb: FormBuilder, public store: Store<IAppState>) {

    this.feeds$ = store.select('feed');

    this.form = fb.group({
      text: ['', Validators.required],
      name: ['', Validators.required]
    });

  }

  submitFeed(): void {

    if (this.form.valid) {

      this.store.dispatch({
        type: ADD_FEED,
        payload: this.form.value
      });

      this.form.reset();
    }
  }

  submitCommentOnFeed(id: string, comment: {}): void {

    this.store.dispatch({
      type: ADD_FEED_COMMENT,
      payload: { id, comment }
    });

  }

  removeFeed(feed: {}): void {

    this.store.dispatch({
      type: REMOVE_FEED,
      payload: feed
    });

  }
}
