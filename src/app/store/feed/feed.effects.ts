import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import {
  FEED_ADD, FEED_ADD_FAIL, FEED_ADD_SUCCESS, FEED_REMOVE, FEED_REMOVE_FAIL,
  FEED_REMOVE_SUCCESS, FEED_ADD_COMMENT, FEED_ADD_COMMENT_FAIL, FEED_ADD_COMMENT_SUCCESS
} from './feed.actions';

@Injectable()
export class FeedEffects {

  @Effect()
  addFeed$ = this.actions$
    .ofType(FEED_ADD)
    .switchMap((action: Action) => {

      return this.http.post('/api/feed', action.payload)
        .map((response: Response) => response.json())
        .catch(() => Observable.of(({ type: FEED_ADD_FAIL })))
        .map((response) => ({type: FEED_ADD_SUCCESS, payload: response}));

    });

  @Effect()
  addFeedComment$ = this.actions$
    .ofType(FEED_ADD_COMMENT)
    .switchMap((action: Action) => {

      return this.http.post('/api/feed/' + action.payload.id + '/comment', action.payload.comment)
        .map((response: Response) => response.json())
        .catch(() => Observable.of(({ type: FEED_ADD_COMMENT_FAIL })))
        .map((response) => ({type: FEED_ADD_COMMENT_SUCCESS, payload: response}));

    });

  @Effect()
  removeFeed$ = this.actions$
    .ofType(FEED_REMOVE)
    .switchMap((action: Action) => {

      return this.http.delete('/api/feed/' + action.payload)
        .map((response: Response) => response.json())
        .catch(() => Observable.of(({ type: FEED_REMOVE_FAIL })))
        .map((response) => ({type: FEED_REMOVE_SUCCESS, payload: response}));

    });

  constructor(private actions$: Actions, private http: Http) {}
}
