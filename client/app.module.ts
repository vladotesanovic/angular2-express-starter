import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic"

import { AppComponent }  from './components/app.component';
import { routing } from "./routes";
import { HomeComponent } from "./components/home/home.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HelloComponent } from "./components/shared/hello.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing
    ],
    declarations: [ HelloComponent, SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, AppComponent, HomeComponent, ContactComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }