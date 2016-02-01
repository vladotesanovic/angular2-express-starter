import { Component, View } from "angular2/core";
import { Http, HTTP_PROVIDERS } from "angular2/http";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic/semantic";
import "rxjs/add/operator/map";

@Component({
	providers: [HTTP_PROVIDERS],
	selector : "item"
})
@View({
	directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
	template: `<h1>Item view! <a href="#/">Home view</a>!</h1>
	<div class="ui container">
		<sm-tabs>
			<sm-tab *ngFor="#tab of tabs | async; #i = index" [ngClass]="{active: i === 0}" 
			[title]="tab.title" class="ui tab bottom attached segment" [data-tab]="tab.title">{{tab.text}}</sm-tab>
		</sm-tabs>
	</div>`
})

export class ItemComponent {
	tabs: any = [];

	constructor(http: Http) {
		this.tabs = http.get("http://localhost:3000/api").map((res: any) => res.json());
	}
}
