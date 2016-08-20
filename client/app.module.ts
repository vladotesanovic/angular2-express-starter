import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthHttp, AuthConfig } from "angular2-jwt";
import { Http, HttpModule } from "@angular/http";

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
        {
            provide: AuthHttp,
            useFactory: (http) => {
                return new AuthHttp(new AuthConfig({
                    noJwtError: true
                }), http);
            },
            deps: [Http]
        }
    ],
    declarations: [ HelloComponent, AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }