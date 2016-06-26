import { Component } from '@angular/core';
import { InfiniteScroll } from 'angular2-infinite-scroll';
import { PotsdamService } from './potsdam.service';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MD_LIST_DIRECTIVES} from '@angular2-material/list';
import { MdCard, MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdButton, MD_BUTTON_DIRECTIVES  } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { TimeAgoPipe } from 'angular2-moment';
import { ActivatedRoute, Router, ROUTER_DIRECTIVES } from '@angular/router';
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
                 InfiniteScroll,
                 MD_LIST_DIRECTIVES,
                 MD_CARD_DIRECTIVES,
                 MD_BUTTON_DIRECTIVES,
                 MD_SIDENAV_DIRECTIVES,
                 ROUTER_DIRECTIVES,
                ],
    providers: [PotsdamService,
                MdIconRegistry,
               ],
    pipes: [TimeAgoPipe],
})


export class PotsdamAppComponent {
    constructor (
        private router: Router,
        private PotsdamService: PotsdamService,
        private activatedRoute: ActivatedRoute
                ) {}
    errorMessage: string;
    next: string;
    postes: Post[];
    title = 'potsdam works!';

    views: Object[] = [
        {
            name: "My Account",
            description: "Edit my account information",
            icon: "assignment ind"
        },
        {
            name: "Potential dates",
            description: "Find your soulmate!",
            icon: "pets"
        }
    ];

    onScrollDown () {
        console.log('scrolled down!!')
        this.getNext();
    }

    onScrollUp () {
        console.log('scrolled up!!')
    }

    ngOnInit() {
        this.router
            .routerState
            .queryParams
            .subscribe(params => {
                console.log('router param - ', params);
                this.getPosts(params);
            });
    }

    getPosts(params) {
        this.PotsdamService.getPosts(params)
            .subscribe(
                postes => {
                    this.extractData(postes.results);
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
                    this.extractData(postes.results);
                    this.next = postes.next
                },
                error =>  this.errorMessage = <any>error);
    }

    clicked(url) {
        window.open(url, '_blank').focus();
    }

    private extractData(results){
        for (var ele in results) {
            results[ele].created_at = new Date(results[ele].created_at);
            if (this.postes == undefined) {
                this.postes = results;
            }
            else {
                this.postes.push(results[ele]);
            }
        };
    }
}
