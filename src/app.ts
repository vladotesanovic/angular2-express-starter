/// <reference path="../typings/angular2/angular2.d.ts" />
/// <reference path="../typings/angular2/router.d.ts" />

import { Component, View, bootstrap, bind } from "angular2/angular2";
import { routerBindings, RouterOutlet, LocationStrategy, RouteConfig, HashLocationStrategy } from "angular2/router";
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
	routerBindings(AppComponent),
	bind(LocationStrategy).toClass(HashLocationStrategy)
]);
