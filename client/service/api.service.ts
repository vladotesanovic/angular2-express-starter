import { AuthHttp } from "angular2-jwt";
import { Injectable } from "@angular/core";
import { Response } from "@angular/http";

@Injectable()
export class ApiService {
    constructor(public authHttp: AuthHttp) {}

    get(url: string) {
        return this
            .authHttp
            .get(url)
            .map((res: Response) => res.json())
    }
}