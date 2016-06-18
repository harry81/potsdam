import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PotsdamService {
    constructor (private http: Http) {}
    private potsUrl = 'http://news.hoodpub.com/api-post/';

    getNext(next: string) {
        console.log('getNext() ', next);
        return this.http.get(next)
            .map(this.extractData);
    }

    getPotss () {
        return this.http.get(this.potsUrl)
            .map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }
}
