import { Directive, Optional, Host, Input } from "angular2/angular2";
import { ItemService } from "../service/service";

@Directive({
	selector: "element-title"
})
export class ElementTitle {
	@Input() title: string;

	constructor(@Optional() @Host() is: ItemService) {
		console.log(is);
		console.log(this.title);
	}
}
