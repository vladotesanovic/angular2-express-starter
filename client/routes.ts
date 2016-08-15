import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";

export const routes: Routes = [
    { path: '', component: AppComponent, pathMatch: 'full' },
    { path: 'contact', loadChildren: 'client/modules/contact/contact.module#ContactModule' },
    { path: 'home', loadChildren: 'client/modules/home/home.module#HomeModule' }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });