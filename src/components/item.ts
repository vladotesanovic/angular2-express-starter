import { Component, View } from "angular2/core";

@Component({
	selector : "item"
})
@View({
	directives: [],
	template: `<h1>Item view! <a href="#/">Home view</a>!</h1>`
})

export class ItemComponent {}
