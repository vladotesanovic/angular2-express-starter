import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';

import {
  WEATHER_GET, AIR_QUALITY_GET, AIR_QUALITY_GET_SUCCESS, AIR_QUALITY_GET_FAIL,
  WEATHER_GET_FAIL, WEATHER_GET_SUCCESS, WEATHER_DATA_GET, WEATHER_DATA_GET_FAIL, WEATHER_DATA_GET_SUCCESS
} from './weather.actions';
import { WeatherService } from '../../weather/weather.service';

@Injectable()
export class WeatherEffects {

  @Effect()
  init$ = this.actions$
    .ofType(WEATHER_GET)
    .mergeMap((action: Action) => {
      return Observable.concat(
        Observable.of(({ type: AIR_QUALITY_GET, payload: action.payload })),
        Observable.of(({ type: WEATHER_DATA_GET, payload: action.payload }))
      );
    });

  @Effect()
  airQualityGet$ = this.actions$
    .ofType(AIR_QUALITY_GET)
    .switchMap((action: Action) => {

      return this.weatherService.getAirQualityIndex(action.payload.longitude, action.payload.latitude)
        .map((response: Response) => response.text())
        .catch(() => Observable.of(({ type: AIR_QUALITY_GET_FAIL })))
        .map((response) => ({type: AIR_QUALITY_GET_SUCCESS, payload: response}));
    });

  @Effect()
  weatherGet$ = this.actions$
    .ofType(WEATHER_GET)
    .switchMap((action: Action) => {

      return this.weatherService.getCurrentWeather(action.payload.longitude, action.payload.latitude)
        .map((response: Response) => response.text())
        .catch(() => Observable.of(({ type: WEATHER_GET_FAIL })))
        .map((response) => ({type: WEATHER_GET_SUCCESS, payload: response}));
    });

  @Effect()
  weatherDataGet$ = this.actions$
    .ofType(WEATHER_DATA_GET)
    .switchMap((action: Action) => {

      return this.weatherService.getWeatherData(action.payload.longitude, action.payload.latitude)
        .map((response: Response) => response.json())
        .catch(() => Observable.of(({ type: WEATHER_DATA_GET_FAIL })))
        .map((response) => ({type: WEATHER_DATA_GET_SUCCESS, payload: response}));
    });

  constructor(private actions$: Actions, private weatherService: WeatherService) {}
}
