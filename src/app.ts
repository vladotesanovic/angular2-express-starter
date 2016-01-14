import { Component, View, bind } from "angular2/core";
import { bootstrap } from "angular2/platform/browser";
import { ROUTER_PROVIDERS, RouterOutlet, LocationStrategy, RouteConfig, HashLocationStrategy } from "angular2/router";
import { ItemComponent } from "./components/item";
import { HomeComponent } from "./components/home";

@Component({
	selector: "app"
})
@View({
	directives: [RouterOutlet],
	template: `
	<div class="center">
		<img src='https://angular.io/resources/images/logos/standard/shield-large.png'>
		<router-outlet></router-outlet>
	</div>`
})
@RouteConfig([
	{ component: HomeComponent, path: "/" },
	{ component: ItemComponent, path: "/item" }
])

export class AppComponent { }

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	bind(LocationStrategy).toClass(HashLocationStrategy)
]);
