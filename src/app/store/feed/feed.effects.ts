import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import {
  ADD_FEED, ADD_FEED_FAIL, ADD_FEED_SUCCESS, REMOVE_FEED, REMOVE_FEED_FAIL,
  REMOVE_FEED_SUCCESS
} from './feed.actions';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class FeedEffects {

  @Effect()
  addFeed$ = this.actions$
    .ofType(ADD_FEED)
    .switchMap((action: Action) => {
      return this.http.post('/api/feed', action.payload)
        .catch(() => Observable.of(({ type: ADD_FEED_FAIL })))
        .map((response: Response) => response.json())
        .map((response) => ({type: ADD_FEED_SUCCESS, payload: response}));
    });

  @Effect()
  removeFeed$ = this.actions$
    .ofType(REMOVE_FEED)
    .switchMap((action: Action) => {
      return this.http.delete('/api/feed/' + action.payload)
        .catch(() => Observable.of(({ type: REMOVE_FEED_FAIL })))
        .map((response: Response) => response.json())
        .map((response) => ({type: REMOVE_FEED_SUCCESS, payload: response}));
    });

  constructor(private actions$: Actions, private http: Http) {}
}
