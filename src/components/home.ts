import { Component, View } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic/semantic";

@Component({
	selector: "home"
})
@View({
	directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
	template: `
	<div class="ui container">
		<sm-segment class="raised"><h1>Hello! <a href="#/item">Item view</a>!</h1></sm-segment>
		<br/>
		<button class="ui button green" [sm-dir-modal]="{selector: 'my-modal'}">Click me</button>
		<sm-modal selector="my-modal" title="Hello from Modal" class="basic">Works!!!</sm-modal>
	</div>
	`
})
export class HomeComponent {}
