import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';

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
        .map((response) => ({type: AIR_QUALITY_GET_SUCCESS, payload: response}))
        .catch(() => Observable.of(({ type: AIR_QUALITY_GET_FAIL })));
    });

  @Effect()
  weatherGet$ = this.actions$
    .ofType(WEATHER_GET)
    .switchMap((action: Action) => {

      return this.weatherService.getCurrentWeather(action.payload.longitude, action.payload.latitude)
        .map((response: Response) => response.text())
        .map((response) => ({type: WEATHER_GET_SUCCESS, payload: response}))
        .catch(() => Observable.of(({ type: WEATHER_GET_FAIL })));
    });

  @Effect()
  weatherDataGet$ = this.actions$
    .ofType(WEATHER_DATA_GET)
    .switchMap((action: Action) => {

      return this.weatherService.getWeatherData(action.payload.longitude, action.payload.latitude)
        .map((response: Response) => response.json())
        .map((response) => ({type: WEATHER_DATA_GET_SUCCESS, payload: response}))
        .catch(() => Observable.of(({ type: WEATHER_DATA_GET_FAIL })));
    });

  constructor(private actions$: Actions, private weatherService: WeatherService) {}
}
