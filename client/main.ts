/// <reference path="../typings/browser.d.ts" />
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide, Type } from "@angular/core";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { HTTP_PROVIDERS } from "@angular/http";
import { ROUTER_PROVIDERS } from '@angular/router';

import { AppComponent } from "./components/app.component";

bootstrap(<Type>AppComponent, [
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	provide(LocationStrategy, {useClass: <Type>HashLocationStrategy})
]);
