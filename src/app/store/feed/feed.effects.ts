
import {of as observableOf,  Observable } from 'rxjs';

import {switchMap, catchError, map} from 'rxjs/operators';
import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



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
    .ofType(FEED_ADD).pipe(
    switchMap((action: FeedAdd) => {

      return this.http.post<IFeed>('/api/feed', action.payload)
      .pipe(
        map((response: IFeed) => new FeedAddSuccess(response)),
        catchError((error) => observableOf(new FeedAddFail(error)))
      );
    }));

  @Effect()
  addFeedComment$ = this.actions$
    .ofType(FEED_ADD_COMMENT).pipe(
    switchMap((action: FeedAddComment) => {

      return this.http.post<IFeedComment>(`/api/feed/${action.payload.id}/comment`, action.payload.comment)
      .pipe(
        map((response: IFeedComment) => new FeedAddCommentSuccess(response)),
        catchError((error) => observableOf(new FeedAddCommentFail(error)))
      );
    }));

  @Effect()
  removeFeed$ = this.actions$
    .ofType(FEED_REMOVE).pipe(
    switchMap((action: FeedRemove) => {

      return this.http.delete<IFeed>(`/api/feed/${action.payload}`)
      .pipe(
        map((response: IFeed) => new FeedRemoveSuccess(response)),
        catchError((error) => observableOf(new FeedRemoveFail(error)))
      );

    }));

  constructor(private actions$: Actions, private http: HttpClient) {}
}
