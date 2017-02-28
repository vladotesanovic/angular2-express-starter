import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../store/index';
import { WEATHER_GET, SELECT_CITY } from '../store/weather/weather.actions';
import { IWeather } from '../store/weather/weather.reducer';

@Component({
  selector: 'app-weather',
  styleUrls: ['./weather.component.css'],
  templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit {
  form: FormGroup;
  weather$: Observable<IWeather>;
  cities: Array<{}>;

  constructor(public fb: FormBuilder, public store: Store<IAppState>) {}

  ngOnInit(): void {

    this.form = this.fb.group({
      'latitude': ['43.815623', Validators.required],
      'longitude': ['18.5683106', Validators.required]
    });

    this.weather$ = this.store.select('weather');

    this.cities = [{
      name: 'Sarajevo',
      latitude: 43.856391,
      longitude: 18.410358,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Sarajevo_City_Panorama.JPG/338px-Sarajevo_City_Panorama.JPG'
    }, {
      name: 'Stockholm',
      latitude: 59.3293,
      longitude: 18.0686,
      image: 'https://media-cdn.tripadvisor.com/media/video-t/01/ae/56/21/architecture-of-stockholm-5.jpg'
    }, {
      name: 'New York City',
      latitude: 40.730610,
      longitude: -73.935242,
      image: 'http://www.propertyhospitality.com/wp-content/uploads/2014/10/New-York-City-Small-Business-Contracts.jpg'
    }, {
      name: 'Tokyo',
      latitude: 35.6895,
      longitude: 139.6917,
      image: 'https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/2142/SITours/tokyo-tower-te' +
      'a-ceremony-and-sumida-river-cruise-day-tour-in-tokyo-115671.jpg'
    }];
  }

  getWeather(): void {

    this.store.dispatch({
      type: WEATHER_GET,
      payload: {
        longitude: this.form.get('longitude').value,
        latitude: this.form.get('latitude').value
      }
    });
  }

  loadCity(data: { longitude: number, latitude: number}): void {
    this.form.setValue(data);

    this.store.dispatch({
      type: SELECT_CITY,
      payload: data
    });
  }
}
