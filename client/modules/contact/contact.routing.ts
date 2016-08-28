import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './home/home.component';
import { FormComponent } from "./form/form.component";

export const routes: Routes = [
    { path: 'contact', component: ContactComponent, pathMatch: "full" },
    { path: 'contact/form', component: FormComponent }
];

export const routing = RouterModule.forChild(routes);