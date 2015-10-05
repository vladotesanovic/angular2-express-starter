	/// <reference path="../typings/angular2/angular2.d.ts" />

import { Component, View, bootstrap } from "angular2/angular2";

@Component({
	selector : "home"
})
@View({
	directives: [],
	template: "<img src='https://angular.io/resources/images/logos/standard/shield-large.png'><h1>Zdravo svete!</h1>"
})

export class HomeComponent {

	constructor() {
		console.log("Constructor");
	}
}

bootstrap(HomeComponent);
