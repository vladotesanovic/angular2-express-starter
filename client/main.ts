/// <reference path="../typings/index.d.ts" />
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide, Type, enableProdMode } from "@angular/core";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { HTTP_PROVIDERS } from "@angular/http";
import { ROUTER_PROVIDERS } from '@angular/router';

enableProdMode();

import { AppComponent } from "./components/app.component";

bootstrap(<Type>AppComponent, [
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	provide(LocationStrategy, {useClass: <Type>HashLocationStrategy})
]);
