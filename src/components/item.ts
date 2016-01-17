import { Component, View } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic/semantic";

@Component({
	selector : "item"
})
@View({
	directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
	template: `<h1>Item view! <a href="#/">Home view</a>!</h1>
	<div class="ui container">
		<sm-tabs>
			<sm-tab title="Hello" class="ui tab bottom attached segment active" data-tab="first">hello...</sm-tab>
			<sm-tab title="About" class="ui tab bottom attached segment" data-tab="second">about..</sm-tab>
		</sm-tabs>
	</div>`
})

export class ItemComponent {}
