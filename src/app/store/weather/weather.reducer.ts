import {
  AIR_QUALITY_GET_SUCCESS, WEATHER_GET_SUCCESS, WEATHER_DATA_GET_SUCCESS, WEATHER_GET,
  SELECT_CITY, AIR_QUALITY_GET_FAIL, WEATHER_GET_FAIL, WEATHER_DATA_GET_FAIL, Actions
} from './weather.actions';

export interface IWeather {
  data: string;
  dataError: boolean;
  airQuality: string;
  airQualityError: boolean;
  forecast: {};
  forecastError: boolean;
  selected: {};
  isFetching: false;
}

export function weatherReducer(state: IWeather, action: Actions): IWeather {

  switch (action.type) {

    case WEATHER_GET:

      return Object.assign({}, state, {
        isFetching: true,
        airQualityError: false,
        dataError: false,
        forecastError: false
      });

    case AIR_QUALITY_GET_SUCCESS:

      return Object.assign({}, state, {
        airQuality: action.payload
      });

    case AIR_QUALITY_GET_FAIL:

      return Object.assign({}, state, {
        airQualityError: true
      });

    case WEATHER_GET_SUCCESS:

      return Object.assign({}, state, {
        data: action.payload
      });

    case WEATHER_GET_FAIL:

      return Object.assign({}, state, {
        dataError: true
      });

    case WEATHER_DATA_GET_SUCCESS:

      return Object.assign({}, state, {
        forecast: action.payload,
        isFetching: false
      });

    case WEATHER_DATA_GET_FAIL:

      return Object.assign({}, state, {
        forecastError: true,
        isFetching: false
      });

    case SELECT_CITY:

      return Object.assign({}, state, {
        selected: action.payload
      });

    default:
      return state;
  }
}
