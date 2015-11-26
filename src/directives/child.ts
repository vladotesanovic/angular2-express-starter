import { Component, View, NgIf, NgFor, ElementRef } from "angular2/angular2";
import { DebugPipe } from "../pipes/debug";
import { ItemService } from "../service/service";
import { ElementTitle } from "../directives/element-title";

@Component({
	properties: ["prop"],
	providers: [ItemService],
	selector: "child"
})
@View({
	directives: [NgIf, ElementTitle, NgFor],
	pipes: [DebugPipe],
	template: `
	<element-title title="ElementTitle"></element-title>
	<div *ng-if="prop">
		<div *ng-for="#p of prop"><p>Hello from child component to: <b>{{p.title}}</b> {{p.date}}</p></div>
	</div>`
})

export class ChildComponent {
	public items: any;

	constructor(public item: ItemService, public elementRef: ElementRef) {
		item.getItem().then((data) => {
			console.log(data);
		});
		// console.log(this.elementRef.nativeElement);
	}
}
