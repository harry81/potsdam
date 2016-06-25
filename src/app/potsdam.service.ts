import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PotsdamService {
    constructor (private http: Http) {}

    //private postUrl = 'http://localhost:8001/api-post/';
    private postUrl = 'http://news.hoodpub.com/api-post/?order=created_at';

    getNext(next: string) {
        console.log('getNext() ', next);
        return this.http.get(next)
            .map(this.extractData);
    }

    getPosts () {
        return this.http.get(this.postUrl)
            .map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }
}
