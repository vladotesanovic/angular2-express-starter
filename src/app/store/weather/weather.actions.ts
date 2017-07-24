import { Action } from '@ngrx/store';

export const WEATHER_GET = '[Weather] get weather for selected city';
export const WEATHER_GET_SUCCESS = '[Weather] weather successfully get';
export const WEATHER_GET_FAIL = '[Weather] error while fetching data';

export const AIR_QUALITY_GET = '[Weather] get air quality';
export const AIR_QUALITY_GET_SUCCESS = '[Weather] air quality successfully get';
export const AIR_QUALITY_GET_FAIL = '[Weather] error while fetching air quality';

export const SELECT_CITY = '[Weather] Select city';

export const WEATHER_DATA_GET = '[Weather] get weather data';
export const WEATHER_DATA_GET_SUCCESS = '[Weather] weather data successfully get';
export const WEATHER_DATA_GET_FAIL = '[Weather] error while fetching wearher data';

interface ILocation {
  longitude: number;
  latitude: number;
}

/* Weather Get */
export class WeatherGet implements Action {
  readonly type = WEATHER_GET;

  constructor(public payload: ILocation) {}
}

export class WeatherGetSuccess implements Action {
  readonly type = WEATHER_GET_SUCCESS;

  constructor(public payload: string) {}
}

export class WeatherGetFail implements Action {
  readonly type = WEATHER_GET_FAIL;

  constructor(public payload: string) {}
}

/* Weather Air */
export class WeatherAirQuality implements Action {
  readonly type = AIR_QUALITY_GET;

  constructor(public payload: ILocation) {}
}

export class WeatherAirQualitySuccess implements Action {
  readonly type = AIR_QUALITY_GET_SUCCESS;

  constructor(public payload: string) {}
}

export class WeatherAirQualityFail implements Action {
  readonly type = AIR_QUALITY_GET_FAIL;

  constructor(public payload: string) {}
}

/* Select City */
export class WeatherSelectCity implements Action {
  readonly type = SELECT_CITY;

  constructor(public payload: string) {}
}

/* Weather Data Get */
export class WeatherDataGet implements Action {
  readonly type = WEATHER_DATA_GET;

  constructor(public payload: ILocation) {}
}

export class WeatherDataGetSuccess implements Action {
  readonly type = WEATHER_DATA_GET_SUCCESS;

  constructor(public payload: string) {}
}

export class WeatherDataGetFail implements Action {
  readonly type = WEATHER_DATA_GET_FAIL;

  constructor(public payload: string) {}
}

export type Actions =
  | WeatherGet
  | WeatherGetSuccess
  | WeatherGetFail
  | WeatherAirQuality
  | WeatherAirQualitySuccess
  | WeatherAirQualityFail
  | WeatherSelectCity
  | WeatherDataGet
  | WeatherDataGetSuccess
  | WeatherDataGetFail;
