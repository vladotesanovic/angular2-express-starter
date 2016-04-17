/// <reference path="../typings/browser.d.ts" />
import { Component, provide } from "angular2/core";
import { HTTP_PROVIDERS } from "angular2/http";
import { bootstrap } from "angular2/platform/browser";
import { ROUTER_PROVIDERS, RouterOutlet, LocationStrategy, RouteConfig, HashLocationStrategy } from "angular2/router";

import { HomeComponent } from "./components/home";

@Component({
	directives: [RouterOutlet],
	selector: "app",
	template: `
	<div class="center">
		<img src='https://angular.io/resources/images/logos/standard/shield-large.png'>
	</div>
	<router-outlet></router-outlet>`
})
@RouteConfig([
	{ component: HomeComponent, path: "/" }
])

class AppComponent { }

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
