import { Action, ActionReducer } from '@ngrx/store';
import { AIR_QUALITY_GET_SUCCESS, WEATHER_GET_SUCCESS, WEATHER_DATA_GET_SUCCESS } from './weather.actions';

export interface IWeather {
  data: string;
  airQuality: string;
  forecast: {};
}

export const weatherReducer: ActionReducer<IWeather> = (state: IWeather, action: Action): IWeather => {

  switch (action.type) {

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
        forecast: action.payload
      });

    default:
      return state;
  }
};
