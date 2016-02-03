import { Component, View } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic/semantic";
import { Http, Headers, RequestOptions } from "angular2/http";

@Component({
	selector: "home"
})
@View({
	directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
	template: `
	<div class="ui container">
		<sm-segment class="raised">
			<h1>Angular 2 and Express authentication with JWT!</h1>
			<sm-list class="ui list bulleted">
				<sm-item class="item">username: {{user.username}}</sm-item>				
				<sm-item class="item">password: {{user.password}}</sm-item>
			</sm-list>
			<p>
				Hardcoded data used for login and signup functionality. 
			</p>
		</sm-segment>
		<br/>
		
		<sm-button class="" (click)="call()">Call protected API</sm-button>
		<sm-button class="positive" (click)="login()">Login</sm-button>
		<sm-button class="basic red" (click)="remove()">Remove JWT from localStorage</sm-button>
		
		
		<sm-button class="right floated" (click)="signup()">Signup</sm-button>
		
		<div class="ui divider hidden"></div>
		
		<!-- Signup response -->
		<sm-segment style="word-wrap: break-word;" *ngIf="response" class="raised">
			<sm-list class="ui list bulleted">
				<sm-item class="item">hashed: {{response?.hashed}}</sm-item>				
				<sm-item class="item">salt: {{response?.salt}}</sm-item>
			</sm-list>
		</sm-segment>
		
		<!-- API call response -->
		<sm-segment *ngIf="error" class="inverted red">
			<sm-item class="item">{{error?.message}}</sm-item>
		</sm-segment>
		
		<sm-segment *ngIf="data" class="inverted green">
			<sm-item class="item">{{data?.title}}</sm-item>
			<sm-item class="item">{{data?.text}}</sm-item>
		</sm-segment>
	</div>
	`
})
export class HomeComponent {
	response: any;
	data: any;
	error: any;
	user: any = {
		password: "angualr2express",
		username: "john"
	};
	constructor(public http: Http) {}
	signup() {

		this.http.post("/login/signup", JSON.stringify({ password: this.user.password, username: this.user.username }), new RequestOptions({
			headers: new Headers({"Content-Type": "application/json"})
		}))
			.map((res: any) => res.json())
			.subscribe(
				(res: any) => {
					this.response = res;
				},
				(error: any) => {
					console.log(error.json());
				}
			);
	}
	call() {

		delete this.error;
		delete this.data;

		this.http.get("/api", new RequestOptions({
			headers: new Headers({"Auth": localStorage.getItem("jwt"), "Content-Type": "application/json"})
		}))
			.map((data: any) => data.json())
			.subscribe(
				data => {
					this.data = data;
				},
				error => {
					this.error = error.json();
				}
			);
	}
	login() {
		this.http.post("/login", JSON.stringify({ password: this.user.password }), new RequestOptions({
			headers: new Headers({"Content-Type": "application/json"})
		}))
			.map((res: any) => res.json())
			.subscribe(
				(res: any) => {
					delete this.error;
					this.data = {
						text: "You can call protected api now",
						title: "Login succesfull"
					};
					localStorage.setItem("jwt", res.jwt);
				},
				(error: any) => {
					console.log(error);
				}
			);
	}
	remove() {
		this.error = { message: "JWT removed" };
		delete this.data;
		localStorage.removeItem("jwt");
	}
}
