import { Component, View, bootstrap, bind } from "angular2/angular2";
import { ROUTER_PROVIDERS, RouterOutlet, LocationStrategy, RouteConfig, HashLocationStrategy } from "angular2/router";
import { ItemComponent } from "./components/item";
import { HomeComponent } from "./components/home";

@Component({
	selector : "app"
})
@View({
	directives: [RouterOutlet],
	template: "<router-outlet></router-outlet>"
})
@RouteConfig([
	{ component: HomeComponent, path: "/" },
	{ component: ItemComponent, path: "/item" }
])

export class AppComponent {}

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	bind(LocationStrategy).toClass(HashLocationStrategy)
]);
