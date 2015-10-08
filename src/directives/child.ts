/// <reference path="../../typings/angular2/angular2.d.ts" />

import { Component, View, NgIf, NgFor } from "angular2/angular2";
import { DebugView } from "../pipes/debug";

@Component({
	properties: ["prop"],
	selector: "child"
})
@View({
	directives: [NgIf, NgFor],
	pipes: [DebugView],
	template: `<div *ng-if="prop" >
		<div *ng-for="#p of prop"><p>Hello from child component to: <b>{{p.title}}</b> {{p.date}}</p></div>
	</div>`
})

export class ChildComponent {}
