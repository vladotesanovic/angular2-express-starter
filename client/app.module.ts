import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic"

import { AppComponent }  from './components/app.component';
import { routing } from "./routes";
import { HttpModule } from "@angular/http";
import { HomeComponent } from "./components/home/home.component";
import { ContactComponent } from "./components/contact/contact.component";

import { HelloComponent } from "./components/shared/hello.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing
    ],
    declarations: [ AppComponent, HomeComponent, ContactComponent, SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, HelloComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }