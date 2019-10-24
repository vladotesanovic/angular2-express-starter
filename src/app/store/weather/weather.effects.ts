import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
  WEATHER_GET,
  AIR_QUALITY_GET,
  WEATHER_DATA_GET,
  WeatherGet,
  WeatherAirQuality,
  WeatherDataGet,
  WeatherAirQualitySuccess,
  WeatherAirQualityFail,
  WeatherGetSuccess,
  WeatherGetFail,
  WeatherDataGetSuccess,
  WeatherDataGetFail
} from './weather.actions';
import { WeatherService } from '../../weather/weather.service';
import { mergeMap, switchMap, catchError, map } from 'rxjs/internal/operators';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class WeatherEffects {

  @Effect()
  init$ = this.actions$.pipe(
    ofType(WEATHER_GET),
    mergeMap((action: WeatherGet) => {
      return [
        of(new WeatherAirQuality(action.payload)),
        of(new WeatherDataGet(action.payload))
      ];
    })
  );

  @Effect()
  airQualityGet$ = this.actions$.pipe(
    ofType(AIR_QUALITY_GET),
    switchMap((action: WeatherAirQuality) => {
      return this.weatherService.getAirQualityIndex(action.payload.longitude, action.payload.latitude)
        .pipe(
          map((response: any) => new WeatherAirQualitySuccess(response)),
          catchError((error) => of(new WeatherAirQualityFail(error)))
        );
    })
  );

  @Effect()
  weatherGet$ = this.actions$.pipe(
    ofType(WEATHER_GET),
    switchMap((action: WeatherGet) => {
      return this.weatherService.getCurrentWeather(action.payload.longitude, action.payload.latitude)
        .pipe(
          map((response: any) => new WeatherGetSuccess(response)),
          catchError((error) => of(new WeatherGetFail(error)))
        );
    })
  );

  @Effect()
  weatherDataGet$ = this.actions$.pipe(
    ofType(WEATHER_DATA_GET),
    switchMap((action: WeatherDataGet) => {
      return this.weatherService.getWeatherData(action.payload.longitude, action.payload.latitude)
        .pipe(
          map((response: any) => new WeatherDataGetSuccess(response)),
          catchError((error) => of(new WeatherDataGetFail(error)))
        );
    })
  );

  constructor(private actions$: Actions, private weatherService: WeatherService) {}
}
