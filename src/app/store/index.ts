import { combineReducers, ActionReducer, Action } from '@ngrx/store';

import { feedReducer, IFeed } from './feed/feed.reducer';
import { profileReducer, IProfile } from './profile/profile.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './profile/profile.effects';
import { FeedEffects } from './feed/feed.effects';

export interface IAppState {
  feed: Array<IFeed>;
  profile: IProfile;
}

const reducers = {
  feed: feedReducer,
  profile: profileReducer
};

const productionReducer: ActionReducer<IAppState> = combineReducers(reducers);

export function reducer(state: IAppState, action: Action) {
  return productionReducer(state, action);
}

export const effects = [
  EffectsModule.run(ProfileEffects),
  EffectsModule.run(FeedEffects)
];
