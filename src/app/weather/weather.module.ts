import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { WeatherComponent } from './weather.component';
import { routing } from './weather.router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AirQualityComponent } from './air/air.component';

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
    AirQualityComponent
  ],
  bootstrap: [
    WeatherComponent
  ]
})
export class WeatherModule {}
