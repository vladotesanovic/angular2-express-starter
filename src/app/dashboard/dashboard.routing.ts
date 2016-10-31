import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './dashboard.component';

const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
