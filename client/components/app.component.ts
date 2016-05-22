import { Component, Type } from "@angular/core";
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';
import { HomeComponent } from "./home/home.component";

@Component({
    directives: [ROUTER_DIRECTIVES],
    selector: "app",
    template: `
	<div class="center">
		<img src='https://angular.io/resources/images/logos/standard/shield-large.png'>
	</div>
	<router-outlet></router-outlet>`
})
@Routes([
    { component: <Type>HomeComponent, path: "/home" }
])
export class AppComponent {
    constructor(private router: Router) {}

    ngOnInit() {
        this.router.navigate(['/home']);
    }
}