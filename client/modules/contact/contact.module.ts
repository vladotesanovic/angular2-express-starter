import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { ContactComponent } from "./home/home.component";
import { routing } from "./contact.routing";
import { SharedModule } from "../shared/shared.module";
import { FormComponent } from "./form/form.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing,
        SharedModule.forRoot()
    ],
    declarations: [ ContactComponent, FormComponent ],
    bootstrap:    [ ContactComponent ]
})
export class ContactModule { }