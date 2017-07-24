import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import {
  FEED_ADD, FEED_REMOVE, FEED_ADD_COMMENT, FeedAdd, FeedAddFail,
  FeedAddSuccess, FeedAddComment, FeedAddCommentFail, FeedAddCommentSuccess, FeedRemove, FeedRemoveFail,
  FeedRemoveSuccess
} from './feed.actions';

@Injectable()
export class FeedEffects {

  @Effect()
  addFeed$ = this.actions$
    .ofType(FEED_ADD)
    .switchMap((action: FeedAdd) => {

      return this.http.post('/api/feed', action.payload)
        .map((response: Response) => response.json())
        .catch((error) => Observable.of(new FeedAddFail(error)))
        .map((response) => new FeedAddSuccess(response));

    });

  @Effect()
  addFeedComment$ = this.actions$
    .ofType(FEED_ADD_COMMENT)
    .switchMap((action: FeedAddComment) => {

      return this.http.post('/api/feed/' + action.payload.id + '/comment', action.payload.comment)
        .map((response: Response) => response.json())
        .catch((error) => Observable.of(new FeedAddCommentFail(error)))
        .map((response) => new FeedAddCommentSuccess(response));

    });

  @Effect()
  removeFeed$ = this.actions$
    .ofType(FEED_REMOVE)
    .switchMap((action: FeedRemove) => {

      return this.http.delete('/api/feed/' + action.payload)
        .map((response: Response) => response.json())
        .catch((error) => Observable.of(new FeedRemoveFail(error)))
        .map((response) => new FeedRemoveSuccess(response));

    });

  constructor(private actions$: Actions, private http: Http) {}
}
