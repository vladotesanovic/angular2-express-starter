import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';

import {
  WEATHER_GET, AIR_QUALITY_GET, WEATHER_DATA_GET, WeatherGet,
  WeatherAirQuality, WeatherDataGet, WeatherAirQualitySuccess, WeatherAirQualityFail, WeatherGetSuccess, WeatherGetFail,
  WeatherDataGetSuccess, WeatherDataGetFail
} from './weather.actions';
import { WeatherService } from '../../weather/weather.service';

@Injectable()
export class WeatherEffects {

  @Effect()
  init$ = this.actions$
    .ofType(WEATHER_GET)
    .mergeMap((action: WeatherGet) => {

      return Observable.concat(
        Observable.of(new WeatherAirQuality(action.payload)),
        Observable.of(new WeatherDataGet(action.payload))
      );
    });

  @Effect()
  airQualityGet$ = this.actions$
    .ofType(AIR_QUALITY_GET)
    .switchMap((action: WeatherAirQuality) => {

      return this.weatherService.getAirQualityIndex(action.payload.longitude, action.payload.latitude)
        .map((response: any) => new WeatherAirQualitySuccess(response))
        .catch((error) => Observable.of(new WeatherAirQualityFail(error)));
    });

  @Effect()
  weatherGet$ = this.actions$
    .ofType(WEATHER_GET)
    .switchMap((action: WeatherGet) => {

      return this.weatherService.getCurrentWeather(action.payload.longitude, action.payload.latitude)
        .map((response: any) => new WeatherGetSuccess(response))
        .catch((error) => Observable.of(new WeatherGetFail(error)));
    });

  @Effect()
  weatherDataGet$ = this.actions$
    .ofType(WEATHER_DATA_GET)
    .switchMap((action: WeatherDataGet) => {

      return this.weatherService.getWeatherData(action.payload.longitude, action.payload.latitude)
        .map((response: any) => new WeatherDataGetSuccess(response))
        .catch((error) => Observable.of(new WeatherDataGetFail(error)));
    });

  constructor(private actions$: Actions, private weatherService: WeatherService) {}
}
