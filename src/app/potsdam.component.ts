import { Component } from '@angular/core';
import { MdCheckbox } from '@angular2-material/checkbox';

@Component({
    moduleId: module.id,
    selector: 'potsdam-app',
    templateUrl: 'potsdam.component.html',
    styleUrls: ['potsdam.component.css'],
    directives: [MdCheckbox],
})
export class PotsdamAppComponent {
    title = 'potsdam works!';
}
