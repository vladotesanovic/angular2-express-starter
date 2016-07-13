/// <reference path="../typings/index.d.ts" />
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Type, enableProdMode } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";
import { GOOGLE_MAPS_PROVIDERS } from 'angular2-google-maps/core';

enableProdMode();

import { AppComponent } from "./components/app.component";
import { APP_ROUTER_PROVIDERS } from "./routes";

bootstrap(<Type>AppComponent, [
	APP_ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	GOOGLE_MAPS_PROVIDERS
]);
