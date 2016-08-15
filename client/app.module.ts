import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing } from "./routes";
import { HelloComponent } from "./components/shared/hello.component";

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [ HelloComponent, AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }