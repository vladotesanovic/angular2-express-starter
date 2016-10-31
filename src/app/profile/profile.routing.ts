import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ProfileComponent } from './profile.component';

const routes: Route[] = [
  {
    path: '',
    component: ProfileComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
