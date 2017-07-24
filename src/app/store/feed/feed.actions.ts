import { IFeed, IFeedComment } from './feed.reducer';
import { Action } from '@ngrx/store';

export const FEED_ADD = '[Feed] add new';
export const FEED_ADD_FAIL = '[Feed] add new fail';
export const FEED_ADD_SUCCESS = '[Feed] add new success';

export const FEED_ADD_COMMENT = '[Feed] add new comment';
export const FEED_ADD_COMMENT_FAIL = '[Feed] add new comment fail';
export const FEED_ADD_COMMENT_SUCCESS = '[Feed] add new comment success';

export const FEED_REMOVE = '[Feed] remove';
export const FEED_REMOVE_FAIL = '[Feed] remove fail';
export const FEED_REMOVE_SUCCESS = '[Feed] remove success';

/* Feed Add */
export class FeedAdd implements Action {
  readonly type = FEED_ADD;

  constructor(public payload: string) {}
}

export class FeedAddSuccess implements Action {
  readonly type = FEED_ADD_SUCCESS;

  constructor(public payload: IFeed) {}
}

export class FeedAddFail implements Action {
  readonly type = FEED_ADD_FAIL;

  constructor(public payload: string) {}
}

/* Feed Add Comment */
export class FeedAddComment implements Action {
  readonly type = FEED_ADD_COMMENT;

  constructor(public payload: IFeedComment) {}
}

export class FeedAddCommentSuccess implements Action {
  readonly type = FEED_ADD_COMMENT_SUCCESS;

  constructor(public payload: IFeedComment) {}
}

export class FeedAddCommentFail implements Action {
  readonly type = FEED_ADD_COMMENT_FAIL;

  constructor(public payload: string) {}
}

/* Feed Remove */
export class FeedRemove implements Action {
  readonly type = FEED_REMOVE;

  constructor(public payload: string) {}
}

export class FeedRemoveSuccess implements Action {
  readonly type = FEED_REMOVE_SUCCESS;

  constructor(public payload: IFeed) {}
}

export class FeedRemoveFail implements Action {
  readonly type = FEED_REMOVE_FAIL;

  constructor(public payload: string) {}
}

export type Actions =
  | FeedAdd
  | FeedAddSuccess
  | FeedAddFail
  | FeedAddComment
  | FeedAddCommentSuccess
  | FeedAddCommentFail
  | FeedRemove
  | FeedRemoveSuccess
  | FeedRemoveFail;
