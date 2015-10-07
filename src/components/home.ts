/// <reference path="../../typings/angular2/angular2.d.ts" />

import { Component, View, FORM_DIRECTIVES } from "angular2/angular2";
import { ChildComponent } from "../directives/child";

class Info {
	title: string;
	date: any;
}

@Component({
	selector: "home"
})
@View({
	directives: [ChildComponent, FORM_DIRECTIVES],
	template: `<div class="center">
		<img src='https://angular.io/resources/images/logos/standard/shield-large.png'>
		<h1>Zdravo svete! <a href="#/item">Item view</a>!</h1>
		<label> Change data ( propagate to child ):
			<input (input)="changeLabel()" [(ng-model)]="data.title" type="text" />
		</label>
		<child [prop]="data"><child>
	</div>`
})
export class HomeComponent {
	public data: Info;

	constructor() {

		this.data = {
			date: new Date().toTimeString(),
			title: "Home Component"
		};
	}
	changeLabel() {
		this.data.date = new Date().toTimeString();
	}
}
