import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './home/home.component';
import { FormComponent } from "./form/form.component";

export const routes: Routes = [
    { path: '', component: ContactComponent, pathMatch: "full" },
    { path: 'form', component: FormComponent }
];

export const routing = RouterModule.forChild(routes);