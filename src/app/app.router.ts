import { Route } from '@angular/router';

export const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'weather'},
  { loadChildren: () => import('app/dashboard/dashboard.module').then(m => m.DashboardModule), path: 'dashboard' },
  { loadChildren: () => import('app/profile/profile.module').then(m => m.ProfileModule), path: 'profile' },
  { loadChildren: () => import('app/weather/weather.module').then(m => m.WeatherModule), path: 'weather' }
];
