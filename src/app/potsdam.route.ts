import { provideRouter }       from '@angular/router';
import { PotsdamAppComponent } from './potsdam.component';

export const routes = [
    { path: 'search',  component: PotsdamAppComponent },
];
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
