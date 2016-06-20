import { Component } from '@angular/core';
import { InfiniteScroll } from 'angular2-infinite-scroll';
import { PotsdamService } from './potsdam.service';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MdCard } from '@angular2-material/card';
import { MdButton } from '@angular2-material/button';
import { MdIcon } from '@angular2-material/icon';

import { Post } from './Post';
@Component({
    moduleId: module.id,
    selector: 'potsdam-app',
    templateUrl: 'potsdam.component.html',
    styleUrls: ['potsdam.component.css'],
    directives: [MdCheckbox,
                 MdCard,
                 MdButton,
                 MdIcon,
                 InfiniteScroll],
    providers: [PotsdamService],
})
export class PotsdamAppComponent {
    constructor (private PotsdamService: PotsdamService) {}
    errorMessage: string;
    next: string;
    postes: Post[];
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

    ngOnInit() { this.getPosts(); }

    getPosts() {
        this.PotsdamService.getPosts()
            .subscribe(
                postes => {this.postes = postes.results;
                           this.next = postes.next
                          },
                error =>  this.errorMessage = <any>error);
    }

    getNext() {
        if (this.next == null)
            return

        this.PotsdamService.getNext(this.next)
            .subscribe(
                postes => {
                    for (var ele in postes.results) {
                        this.postes.push(postes.results[ele]);
                    };
                    this.next = postes.next
                },
                error =>  this.errorMessage = <any>error);
    }

}
