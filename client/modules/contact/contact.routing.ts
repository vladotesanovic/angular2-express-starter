import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: ContactComponent }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });