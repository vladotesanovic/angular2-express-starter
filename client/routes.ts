import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });