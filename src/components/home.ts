import { Component, View } from "angular2/core";

@Component({
	selector: "home"
})
@View({
	directives: [],
	template: `<h1>Hello! <a href="#/item">Item view</a>!</h1>`
})
export class HomeComponent {}
