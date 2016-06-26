import { bootstrap } from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import { enableProdMode } from '@angular/core';
import { PotsdamAppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/potsdam.route';

if (environment.production) {
  enableProdMode();
}


bootstrap(PotsdamAppComponent, [HTTP_PROVIDERS,
                                APP_ROUTER_PROVIDERS,
                               ]);
