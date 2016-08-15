import { Component } from "@angular/core";

@Component({
    selector: "app",
    template: `<div class="ui container">
        <div class="center">
            <img src='https://angular.io/resources/images/logos/standard/shield-large.png'>
        </div>
        <hello [name]="appName"></hello>
        
        <div class="ui divider"></div>
        
        <router-outlet></router-outlet>
        
        <nav class="ui menu inverted teal">
            <a routerLink="home/list" class="item">Home</a>
            <a routerLink="contact" class="item">Contact Me</a>
        </nav>
      </div>`
})
export class AppComponent {
    appName: string = "Angular 2 Express"
}