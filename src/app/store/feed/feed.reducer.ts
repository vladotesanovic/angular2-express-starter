import { Action, ActionReducer } from '@ngrx/store';
import { REMOVE_FEED_SUCCESS, ADD_FEED_SUCCESS, ADD_FEED_COMMENT_SUCCESS } from './feed.actions';

export interface IFeed {
  id: string;
  text: string;
  date: string;
  comments?: Array<{}>;
}

export const feedReducer: ActionReducer<IFeed[]> = (state: Array<IFeed> = [], action: Action): IFeed[] => {

  switch (action.type) {

    case ADD_FEED_SUCCESS:

      return [...state, action.payload];

    case REMOVE_FEED_SUCCESS:

      return state.filter((feed: IFeed) => action.payload.id !== feed.id);

    case ADD_FEED_COMMENT_SUCCESS:

      const [ feed ] = state.filter((feed: IFeed) => action.payload.id === feed.id);
      const index = state.indexOf(feed);

      feed.comments = feed.comments || [];
      feed.comments = [...feed.comments, action.payload.comment];

      return [...state.slice(0, index), feed, ...state.slice(index + 1)];

    default:
      return state;
  }
};
