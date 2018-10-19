
import {of as observableOf, concat as observableConcat,  Observable } from 'rxjs';

import {mergeMap, switchMap, catchError, map} from 'rxjs/operators';
import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';






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
    .ofType(WEATHER_GET).pipe(
    mergeMap((action: WeatherGet) => {

      return observableConcat(
        observableOf(new WeatherAirQuality(action.payload)),
        observableOf(new WeatherDataGet(action.payload))
      );
    }));

  @Effect()
  airQualityGet$ = this.actions$
    .ofType(AIR_QUALITY_GET).pipe(
    switchMap((action: WeatherAirQuality) => {

      return this.weatherService.getAirQualityIndex(action.payload.longitude, action.payload.latitude)
      .pipe(
        map((response: any) => new WeatherAirQualitySuccess(response)),
        catchError((error) => observableOf(new WeatherAirQualityFail(error)))
      );
    }));

  @Effect()
  weatherGet$ = this.actions$
    .ofType(WEATHER_GET).pipe(
    switchMap((action: WeatherGet) => {

      return this.weatherService.getCurrentWeather(action.payload.longitude, action.payload.latitude)
      .pipe(
        map((response: any) => new WeatherGetSuccess(response)),
        catchError((error) => observableOf(new WeatherGetFail(error)))
      );
    }));

  @Effect()
  weatherDataGet$ = this.actions$
    .ofType(WEATHER_DATA_GET).pipe(
    switchMap((action: WeatherDataGet) => {

      return this.weatherService.getWeatherData(action.payload.longitude, action.payload.latitude)
      .pipe(
        map((response: any) => new WeatherDataGetSuccess(response)),
        catchError((error) => observableOf(new WeatherDataGetFail(error)))
      );
    }));

  constructor(private actions$: Actions, private weatherService: WeatherService) {}
}
