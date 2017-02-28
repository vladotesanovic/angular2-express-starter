import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherService {

  private mashapeKey = 'O9p2cWOU18mshKOD0m6aBMMVXOrxp1PaIUYjsniijuS94Ib56u';

  constructor(public http: Http) {}

  /**
   * Air Quality Index
   *
   * @param longitude
   * @param latitude
   * @returns {Observable<Response>}
   */
  getAirQualityIndex(longitude: number, latitude: number): Observable<{}> {

    return this.http.get(`https://simple-weather.p.mashape.com/aqi?lat=${latitude}&lng=${longitude}`, {
      headers: new Headers({
        'X-Mashape-Key': this.mashapeKey,
        'Accept': 'text/plain'
      })
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
      headers: new Headers({
        'X-Mashape-Key': this.mashapeKey,
        'Accept': 'text/plain'
      })
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
      headers: new Headers({
        'X-Mashape-Key': this.mashapeKey,
        'Accept': 'application/json'
      })
    });
  }
}
