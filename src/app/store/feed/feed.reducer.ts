import { Action, ActionReducer } from '@ngrx/store';
import { FEED_REMOVE_SUCCESS, FEED_ADD_SUCCESS, FEED_ADD_COMMENT_SUCCESS } from './feed.actions';

export interface IFeed {
  id: string;
  text: string;
  date: string;
  comments?: Array<{}>;
}

export const feedReducer: ActionReducer<IFeed[]> = (state: Array<IFeed> = [], action: Action): IFeed[] => {

  switch (action.type) {

    case FEED_ADD_SUCCESS:

      return [...state, Object.assign({}, action.payload, {
        comments: []
      })];

    case FEED_REMOVE_SUCCESS:

      return state.filter((feed: IFeed) => action.payload.id !== feed.id);

    case FEED_ADD_COMMENT_SUCCESS:

      const [ feed ] = state.filter((item: IFeed) => action.payload.id === item.id);
      const index = state.indexOf(feed);

      const newFeed = Object.assign({}, feed, {
        comments: [...feed.comments, action.payload.comment]
      });

      return [...state.slice(0, index), newFeed, ...state.slice(index + 1)];

    default:
      return state;
  }
};
