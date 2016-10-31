import { Action, ActionReducer } from '@ngrx/store';
import { REMOVE_FEED_SUCCESS, ADD_FEED_SUCCESS } from './feed.actions';

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

      return state.filter((map: IFeed) => action.payload.id !== map.id);

    default:
      return state;
  }
};
