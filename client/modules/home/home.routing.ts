import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

export const routes: Routes = [
    { path: '', redirectTo: "list" },
    { path: 'list', component: HomeComponent }
];

export const routing = RouterModule.forChild(routes);