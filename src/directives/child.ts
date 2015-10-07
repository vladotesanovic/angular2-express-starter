/// <reference path="../../typings/angular2/angular2.d.ts" />

import { Component, View, NgIf } from "angular2/angular2";

@Component({
	properties: ["prop"],
	selector: "child"
})
@View({
	directives: [NgIf],
	template: `<div *ng-if="prop"><p>Hello from child component to: <b>{{prop.title}}</b> on {{prop.date}}</p></div>`
})

export class ChildComponent {}
