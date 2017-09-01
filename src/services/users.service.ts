import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import { Observable } from "rxjs/Observable";
import { Headers , RequestOptions } from "@angular/http"
import 'rxjs/add/operator/map';
@Injectable()
export class UsersService {
    headers: Headers = new Headers();
    options: RequestOptions = new RequestOptions() ;
    constructor( private http: Http ) {
    }

    req(): Observable<any>{
        let apiURL = `http://localhost/project/progressiveminds-backend/public/hello/4`;
        return this.http.post(apiURL, null)
            .map(res => {
                return res.json()
            });
    }
}
