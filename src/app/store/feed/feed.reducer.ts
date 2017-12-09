import { FEED_REMOVE_SUCCESS, FEED_ADD_SUCCESS, FEED_ADD_COMMENT_SUCCESS, Actions } from './feed.actions';

export interface IFeed {
  id: string;
  text: string;
  date: string;
  comments?: IFeedComment[];
}

export interface IFeedComment {
  id: string;
  comment: string;
}

export function feedReducer(state: IFeed[] = [], action: Actions): IFeed[] {

  switch (action.type) {

    case FEED_ADD_SUCCESS:

      return [...state, Object.assign({}, action.payload, {
        comments: []
      })];

    case FEED_REMOVE_SUCCESS:

      return state.filter((feedToRemove: IFeed) => action.payload.id !== feedToRemove.id);

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
}
