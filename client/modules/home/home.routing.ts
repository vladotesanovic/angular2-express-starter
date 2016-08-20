import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AppComponent } from "./app.component";

export const routes: Routes = [
    {
        children: [
            { component: HomeComponent, path: "" }
        ],
        component: AppComponent,
        path: ""
    }
];

export const routing = RouterModule.forChild(routes);
