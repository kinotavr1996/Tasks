import { AppConfig } from './../../config/config';
import { KeyValueModel } from './../models/key-value.model';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {
    private lang: string;

    constructor(private http: Http) { }

    private prepareHeaders(headersRaw) {
        let token = null;
        const headers = new Headers();

        headers.append('Access-Control-Allow-Origin', '*');
        if (headersRaw == null) {
            headers.append('Content-Type', 'application/json');
        } else {
            headersRaw.forEach((item) => {
                headers.append(item.type, item.value);
            });
        }

        const loginData = JSON.parse(localStorage.getItem('loginData'));
        if (loginData) {
            token = loginData.accessToken;
            headers.append('Authorization', 'bearer ' + token);
        }

        return headers;
    }

    /* =============== METHODS ===============
    dataRaw     - regular JS object
    headersRaw  - object literal containing headers
    */
    get(url: string, headersRaw: KeyValueModel[] = null) {
        const headers = this.prepareHeaders(headersRaw);
        return this.http
            .get(AppConfig.apiUrl + url, { headers: headers })
            .map(response => response)
            .catch(error => Observable.throw(error));
    }

    post(url: string, dataRaw: any, headersRaw: KeyValueModel[] = null) {
        const headers = this.prepareHeaders(headersRaw);
        const data = JSON.stringify(dataRaw);

        return this.http
            .post(AppConfig.apiUrl + url, data, { headers: headers })
            .map(response => response)
            .catch(error => Observable.throw(error));
    }

    put(url: string, dataRaw: any, headersRaw: KeyValueModel[] = null) {
        const headers = this.prepareHeaders(headersRaw);
        const data = JSON.stringify(dataRaw);

        return this.http
            .put(AppConfig.apiUrl + url, data, { headers })
            .map(response => response)
            .catch(error => Observable.throw(error));
    }

    delete(url: string) {
        const headers = this.prepareHeaders(null);

        return this.http
            .delete(AppConfig.apiUrl + url, { headers })
            .map(response => response)
            .catch(error => Observable.throw(error));
    }

}
