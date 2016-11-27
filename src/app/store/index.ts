import { StoreModule, combineReducers } from '@ngrx/store';

import { feedReducer, IFeed } from './feed/feed.reducer';
import { profileReducer, IProfile } from './profile/profile.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './profile/profile.effects';
import { FeedEffects } from './feed/feed.effects';

export interface IAppState {
  feed: Array<IFeed>;
  profile: IProfile;
}

const combined = combineReducers({
  feed: feedReducer,
  profile: profileReducer
});

export const store = StoreModule.provideStore(combined);

export const effects = [
  EffectsModule.run(ProfileEffects),
  EffectsModule.run(FeedEffects)
];
