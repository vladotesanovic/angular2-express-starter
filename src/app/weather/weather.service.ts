import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {

  private mashapeKey = 'O9p2cWOU18mshKOD0m6aBMMVXOrxp1PaIUYjsniijuS94Ib56u';

  constructor(public http: HttpClient) {}

  /**
   * Air Quality Index
   *
   * @param longitude
   * @param latitude
   * @returns {Observable<Response>}
   */
  getAirQualityIndex(longitude: number, latitude: number): Observable<{}> {

    return this.http.get(`https://simple-weather.p.mashape.com/aqi?lat=${latitude}&lng=${longitude}`, {
      headers: {
        'X-Mashape-Key': this.mashapeKey,
        'Accept': 'text/plain'
      },
      responseType: 'text'
    });
  }

  /**
   * Get current weather state
   *
   * @param longitude
   * @param latitude
   * @returns {Observable<Response>}
   */
  getCurrentWeather(longitude: number, latitude: number): Observable<{}> {

    return this.http.get(`https://simple-weather.p.mashape.com/weather?lat=${latitude}&lng=${longitude}`, {
      headers: {
        'X-Mashape-Key': this.mashapeKey,
        'Accept': 'text/plain'
      },
      responseType: 'text'
    });
  }

  /**
   * Get weather forecast
   *
   * @param longitude
   * @param latitude
   * @returns {Observable<Response>}
   */
  getWeatherData(longitude: number, latitude: number): Observable<{}> {

    return this.http.get(`https://simple-weather.p.mashape.com/weatherdata?lat=${latitude}&lng=${longitude}`, {
      headers: {
        'X-Mashape-Key': this.mashapeKey,
        'Accept': 'application/json'
      }
    });
  }
}
