import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { ContactComponent } from "./home/home.component";
import { routing } from "./contact.routing";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing,
        SharedModule.forRoot()
    ],
    declarations: [ ContactComponent ],
    bootstrap:    [ ContactComponent ]
})
export class ContactModule { }