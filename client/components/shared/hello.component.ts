import { Component, Input } from "@angular/core";

@Component({
    selector: "hello",
    template: `<h2 class="ui header divided">{{name}}</h2>`
})
export class HelloComponent {
    @Input() name: string;
}
