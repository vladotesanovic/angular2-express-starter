import { combineReducers, ActionReducer, Action, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { compose } from '@ngrx/core';
import { storeFreeze } from 'ngrx-store-freeze';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { feedReducer, IFeed } from './feed/feed.reducer';
import { profileReducer, IProfile } from './profile/profile.reducer';
import { ProfileEffects } from './profile/profile.effects';
import { FeedEffects } from './feed/feed.effects';
import { environment } from '../../environments/environment';
import { IWeather, weatherReducer } from './weather/weather.reducer';
import { WeatherEffects } from './weather/weather.effects';
import { CommonModule } from '@angular/common';

// all new reducers should be define here
export interface IAppState {
  feed: IFeed[];
  profile: IProfile;
  weather: IWeather;
}

// all new reducers should be define here
const reducers = {
  feed: feedReducer,
  profile: profileReducer,
  weather: weatherReducer
};

const productionReducer: ActionReducer<IAppState> = combineReducers(reducers);
const developmentReducer: ActionReducer<IAppState> = compose(storeFreeze, combineReducers)(reducers);

export function reducer(state: IAppState, action: Action) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

@NgModule()
export class DummyModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CommonModule
    };
  }
}

export const store: ModuleWithProviders = StoreModule.provideStore(reducer);
export const instrumentation: ModuleWithProviders =
  (!environment.production) ? StoreDevtoolsModule.instrumentOnlyWithExtension() : DummyModule.forRoot();

export const effects: ModuleWithProviders[] = [
  EffectsModule.run(ProfileEffects),
  EffectsModule.run(FeedEffects),
  EffectsModule.run(WeatherEffects)
];
