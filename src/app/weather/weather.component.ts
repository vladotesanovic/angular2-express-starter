import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/index';
import { WEATHER_GET } from '../store/weather/weather.actions';
import { Observable } from 'rxjs';
import { IWeather } from "../store/weather/weather.reducer";

@Component({
  selector: 'app-weather',
  styleUrls: ['./weather.component.css'],
  templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit {
  form: FormGroup;
  weather$: Observable<IWeather>;

  constructor(public fb: FormBuilder, public store: Store<IAppState>) {}

  ngOnInit(): void {

    this.form = this.fb.group({
      'latitude': ['43.815623', Validators.required],
      'longitude': ['18.5683106', Validators.required]
    });

    this.weather$ = this.store.select('weather');
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
}
