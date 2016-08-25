import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { NgSemanticModule } from "ng-semantic";

import { ContactComponent } from "./home/home.component";
import { routing } from "./contact.routing";
import { SharedModule } from "../shared/shared.module";
import { FormComponent } from "./form/form.component";
import { ProfileComponent } from "./profile/profile.component";

@NgModule({
    imports: [
        HttpModule,
        NgSemanticModule,
        routing,
        SharedModule.forRoot()
    ],
    exports: [ ProfileComponent ],
    declarations: [ ContactComponent, FormComponent, ProfileComponent ],
    bootstrap:    [ ContactComponent ]
})
export class ContactModule { }