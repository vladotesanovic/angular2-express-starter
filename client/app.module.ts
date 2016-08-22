import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthConfig, provideAuth } from "angular2-jwt";
import { HttpModule } from "@angular/http";

import { AppComponent }  from './app.component';
import { routing } from "./routes";
import { HelloComponent } from "./components/shared/hello.component";
import { ApiService } from "./service/api.service";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing
    ],
    providers: [
        ApiService,
        provideAuth(new AuthConfig({
            noJwtError: true
        }))
    ],
    declarations: [
        HelloComponent,
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }