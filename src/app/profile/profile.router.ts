import { Route } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { EditComponent } from './edit/edit.component';

export const routes: Route[] = [
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
