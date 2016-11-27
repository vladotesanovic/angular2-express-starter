
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { EditComponent } from './edit/edit.component';

const routes: Route[] = [
  {
    path: '',
    component: ProfileComponent
  },
  {
    path: 'edit',
    component: EditComponent,
    outlet: 'modal'
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
