import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ADD_FEED, REMOVE_FEED } from '../store/feed/feed.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {
  form: FormGroup;

  feeds$: Observable<{}>;

  constructor(public fb: FormBuilder, public store: Store<{}>) {

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

  removeFeed(feed: {}): void {

    this.store.dispatch({
      type: REMOVE_FEED,
      payload: feed
    });

  }
}
