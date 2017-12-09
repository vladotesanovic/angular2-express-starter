import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import {
  FEED_ADD, FEED_REMOVE, FEED_ADD_COMMENT, FeedAdd, FeedAddFail,
  FeedAddSuccess, FeedAddComment, FeedAddCommentFail, FeedAddCommentSuccess, FeedRemove, FeedRemoveFail,
  FeedRemoveSuccess
} from './feed.actions';
import { IFeed, IFeedComment } from './feed.reducer';

@Injectable()
export class FeedEffects {

  @Effect()
  addFeed$ = this.actions$
    .ofType(FEED_ADD)
    .switchMap((action: FeedAdd) => {

      return this.http.post<IFeed>('/api/feed', action.payload)
        .catch((error) => Observable.of(new FeedAddFail(error)))
        .map((response: IFeed) => new FeedAddSuccess(response));
    });

  @Effect()
  addFeedComment$ = this.actions$
    .ofType(FEED_ADD_COMMENT)
    .switchMap((action: FeedAddComment) => {

      return this.http.post<IFeedComment>(`/api/feed/${action.payload.id}/comment`, action.payload.comment)
        .catch((error) => Observable.of(new FeedAddCommentFail(error)))
        .map((response: IFeedComment) => new FeedAddCommentSuccess(response));
    });

  @Effect()
  removeFeed$ = this.actions$
    .ofType(FEED_REMOVE)
    .switchMap((action: FeedRemove) => {

      return this.http.delete<IFeed>(`/api/feed/${action.payload}`)
        .catch((error) => Observable.of(new FeedRemoveFail(error)))
        .map((response: IFeed) => new FeedRemoveSuccess(response));

    });

  constructor(private actions$: Actions, private http: HttpClient) {}
}
