import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { WeatherComponent } from './weather.component';

const routes: Route[] = [
  {
    path: '',
    component: WeatherComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
