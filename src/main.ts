import { bootstrap } from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import { enableProdMode } from '@angular/core';
import {ROUTER_PROVIDERS} from '@angular/router';
import { PotsdamAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(PotsdamAppComponent, [HTTP_PROVIDERS,
                                ROUTER_PROVIDERS,
                               ]);
