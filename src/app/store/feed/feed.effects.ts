import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError } from 'rxjs/internal/operators';

import {
  FEED_ADD, FEED_REMOVE, FEED_ADD_COMMENT, FeedAdd, FeedAddFail,
  FeedAddSuccess, FeedAddComment, FeedAddCommentFail, FeedAddCommentSuccess, FeedRemove, FeedRemoveFail,
  FeedRemoveSuccess
} from './feed.actions';
import { IFeed, IFeedComment } from './feed.reducer';
import { of } from 'rxjs';

@Injectable()
export class FeedEffects {

  @Effect()
  addFeed$ = this.actions$.pipe(
    ofType(FEED_ADD),
    switchMap((action: FeedAdd) => {
      return this.http.post<IFeed>('/api/feed', action.payload)
      .pipe(
        map((response: IFeed) => new FeedAddSuccess(response)),
        catchError((error) => of(new FeedAddFail(error)))
      );
    })
  );

  @Effect()
  addFeedComment$ = this.actions$.pipe(
    ofType(FEED_ADD_COMMENT),
    switchMap((action: FeedAddComment) => {
      return this.http.post<IFeedComment>(`/api/feed/${action.payload.id}/comment`, action.payload.comment)
      .pipe(
        map((response: IFeedComment) => new FeedAddCommentSuccess(response)),
        catchError((error) => of(new FeedAddCommentFail(error)))
      );
    })
  );

  @Effect()
  removeFeed$ = this.actions$.pipe(
    ofType(FEED_REMOVE),
    switchMap((action: FeedRemove) => {
      return this.http.delete<IFeed>(`/api/feed/${action.payload}`)
      .pipe(
        map((response: IFeed) => new FeedRemoveSuccess(response)),
        catchError((error) => of(new FeedRemoveFail(error)))
      );
    })
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
