import { Component, View, bind } from "angular2/core";
import { HTTP_PROVIDERS } from "angular2/http";
import { bootstrap } from "angular2/platform/browser";
import { ROUTER_PROVIDERS, RouterOutlet, LocationStrategy, RouteConfig, HashLocationStrategy } from "angular2/router";
import { HomeComponent } from "./components/home";

@Component({
	selector: "app"
})
@View({
	directives: [RouterOutlet],
	template: `
	<div class="center">
		<img src='https://angular.io/resources/images/logos/standard/shield-large.png'>
	</div>
	<router-outlet></router-outlet>`
})
@RouteConfig([
	{ component: HomeComponent, path: "/" }
])

export class AppComponent { }

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	bind(LocationStrategy).toClass(HashLocationStrategy)
]);
