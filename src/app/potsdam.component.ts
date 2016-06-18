import { Component } from '@angular/core';
import { MdCheckbox } from '@angular2-material/checkbox';
import { InfiniteScroll } from 'angular2-infinite-scroll';

@Component({
    moduleId: module.id,
    selector: 'potsdam-app',
    templateUrl: 'potsdam.component.html',
    styleUrls: ['potsdam.component.css'],
    directives: [MdCheckbox, InfiniteScroll],
})
export class PotsdamAppComponent {
    title = 'potsdam works!';
}
