/// <reference path="../../typings/angular2/angular2.d.ts" />

import { Component, View, FORM_DIRECTIVES } from "angular2/angular2";
import { ChildComponent } from "../directives/child";

class DataObject {
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
			<input (input)="changeLabel()" [(ng-model)]="array[0].title" type="text" />
		</label>
		<child [prop]="array"><child>
	</div>`
})
export class HomeComponent {
	public array: Array<DataObject>;

	constructor() {

		this.array = new Array<DataObject>();

		this.array.push({
			date: new Date().toTimeString(),
			title: "Appolo"
		});
		this.array.push({
			date: new Date().toTimeString(),
			title: "Enterprise"
		});
	}
	changeLabel() {

		this.array[0].date = new Date().toTimeString();
	}
}
