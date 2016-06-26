import { provideRouter, RouterConfig } from '@angular/router';
import { PotsdamAppComponent } from './potsdam.component';

export const routes: RouterConfig = [
  { path: '/', component: PotsdamAppComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
