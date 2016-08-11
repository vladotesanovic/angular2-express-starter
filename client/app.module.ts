import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './components/app.component';
import { routing } from "./routes";
import { HttpModule } from "@angular/http";
import { HomeComponent } from "./components/home/home.component";
import { ContactComponent } from "./components/contact/contact.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing
    ],
    declarations: [ AppComponent, HomeComponent, ContactComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }