import { Component } from "@angular/core";
import { AuthHttp } from "angular2-jwt";

@Component({
    selector: "home",
    templateUrl: `client/modules/home/home.component.html`
})
export class HomeComponent {
    response: {
        text: string;
        title: string;
    };

    constructor(public authHttp: AuthHttp) {
        authHttp
            .get("/public")
            .map((data) => data.json())
            .subscribe((data) => this.response = data);
    }
}
