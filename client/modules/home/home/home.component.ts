import { Component } from "@angular/core";
import { ApiService } from "../../../service/api.service";

@Component({
    selector: "home",
    templateUrl: `client/modules/home/home/home.component.html`
})
export class HomeComponent {
    response: {
        text: string;
        title: string;
    };

    constructor(public authHttp: ApiService) {
        authHttp
            .get("/public")
            .subscribe((data) => this.response = data);
    }
}
