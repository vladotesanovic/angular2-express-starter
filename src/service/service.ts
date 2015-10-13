/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../../typings/es6-promise/es6-promise.d.ts" />

export class ItemService {
	public promise: Promise<any>;

	getItem(): Promise<any> {

		this.promise = new Promise((resolve, reject) => {
			resolve({
				title: "Hello"
			});
		});

		return this.promise;
	}
}
