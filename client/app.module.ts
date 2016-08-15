import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent }  from './app.component';
import { routing } from "./routes";
import { HelloComponent } from "./components/shared/hello.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing
    ],
    declarations: [ HelloComponent, AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }