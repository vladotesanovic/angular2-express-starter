import { Action, ActionReducer } from '@ngrx/store';
import { AIR_QUALITY_GET_SUCCESS, WEATHER_GET_SUCCESS, WEATHER_DATA_GET_SUCCESS, WEATHER_GET } from './weather.actions';

export interface IWeather {
  data: string;
  airQuality: string;
  forecast: {};
  isFetching: false;
}

export const weatherReducer: ActionReducer<IWeather> = (state: IWeather, action: Action): IWeather => {

  switch (action.type) {

    case WEATHER_GET:

      return Object.assign({}, state, {
        isFetching: true
      });

    case AIR_QUALITY_GET_SUCCESS:

      return Object.assign({}, state, {
        airQuality: action.payload
      });

    case WEATHER_GET_SUCCESS:

      return Object.assign({}, state, {
        data: action.payload
      });

    case WEATHER_DATA_GET_SUCCESS:

      return Object.assign({}, state, {
        forecast: action.payload,
        isFetching: false
      });

    default:
      return state;
  }
};
