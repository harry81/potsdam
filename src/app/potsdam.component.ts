import { Component } from '@angular/core';
import { MdCheckbox } from '@angular2-material/checkbox';
import { InfiniteScroll } from 'angular2-infinite-scroll';
import { PotsdamService } from './potsdam.service';

import { Post } from './Post';
@Component({
    moduleId: module.id,
    selector: 'potsdam-app',
    templateUrl: 'potsdam.component.html',
    styleUrls: ['potsdam.component.css'],
    directives: [MdCheckbox, InfiniteScroll],
    providers: [PotsdamService],
})
export class PotsdamAppComponent {
    constructor (private PotsdamService: PotsdamService) {}
    errorMessage: string;
    next: string;
    potses: Post[];
    title = 'potsdam works!';

    onScroll() {
        console.log('onScroll');
    }

    onScrollDown () {
        console.log('scrolled down!!')
        this.getNext();
    }

    onScrollUp () {
        console.log('scrolled up!!')
    }

    ngOnInit() { this.getPotss(); }

    getPotss() {
        this.PotsdamService.getPotss()
            .subscribe(
                potses => {this.potses = potses.results;
                           this.next = potses.next
                          },
                error =>  this.errorMessage = <any>error);
    }

    getNext() {
        this.PotsdamService.getNext(this.next)
            .subscribe(
                potses => {
                    this.potses = potses.results;
                    // for (var ele in potses.results) {
                    //     console.log(ele);
                        // this.potses.push(ele);
                    // };

                    this.next = potses.next
                },
                error =>  this.errorMessage = <any>error);
    }

}
