import { Injectable } from '@angular/core';
import { HttpService } from './../../../../services/http.service';

@Injectable()
export class HeaderHttpService {
    constructor(private _http: HttpService) { }
}
