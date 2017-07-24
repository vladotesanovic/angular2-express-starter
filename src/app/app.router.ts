import { Route } from '@angular/router';

export const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'weather'},
  { loadChildren: 'app/dashboard/dashboard.module#DashboardModule', path: 'dashboard' },
  { loadChildren: 'app/profile/profile.module#ProfileModule', path: 'profile' },
  { loadChildren: 'app/weather/weather.module#WeatherModule', path: 'weather' }
];
