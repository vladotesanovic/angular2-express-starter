export class ItemService {

	public promise: Promise<any>;

	getItem(): Promise<any> {

		this.promise = new Promise((resolve, reject) => {
			return resolve({
				title: "Hello from service"
			});
		});

		return this.promise;
	}
}
