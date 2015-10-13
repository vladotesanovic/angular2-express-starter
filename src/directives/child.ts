/// <reference path="../../typings/angular2/angular2.d.ts" />

import { Component, View, NgIf, NgFor } from "angular2/angular2";
import { DebugPipe } from "../pipes/debug";
import { ItemService } from "../service/service";

@Component({
	bindings: [ItemService],
	properties: ["prop"],
	selector: "child"
})
@View({
	directives: [NgIf, NgFor],
	pipes: [DebugPipe],
	template: `<div *ng-if="prop" >
		<div *ng-for="#p of prop"><p>Hello from child component to: <b>{{p.title}}</b> {{p.date}}</p></div>
	</div>`
})

export class ChildComponent {
	constructor(public item: ItemService) {
		item.getItem().then((data) => {
			console.log(data);
		});
	}
}
