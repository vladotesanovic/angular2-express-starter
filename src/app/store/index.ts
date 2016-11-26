import { StoreModule, combineReducers } from '@ngrx/store';

import { feedReducer, IFeed } from './feed/feed.reducer';

export interface IAppState {
  feed: Array<IFeed>;
}

const combined = combineReducers({
  feed: feedReducer
});

export const store = StoreModule.provideStore(combined);
