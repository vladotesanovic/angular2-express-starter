import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });