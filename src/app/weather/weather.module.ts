import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { WeatherComponent } from './weather.component';
import { routing } from './weather.router';
import { AirQualityComponent } from './air/air.component';
import { CityComponent } from './city/city.component';
import { ForecastComponent } from './forecast/forecast.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    WeatherComponent,
    ForecastComponent,
    CityComponent,
    AirQualityComponent
  ],
  bootstrap: [
    WeatherComponent
  ]
})
export class WeatherModule {}
