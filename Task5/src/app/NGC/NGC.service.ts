import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { NGCModels } from './NGC.model';
import { CONFIG } from './NGC.config';


@Injectable()
export class NGCService {

    DummyDataCollection:any;
    constructor(private _http: Http) {
        console.log('NGCService constructor called. ');
    }

    getNGCData(currentPageOffset:number, pageSize:number) {
        console.log("PlanOnPageService - getPopData called. ");        
        var baseUrl = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');     
        console.log("base url: " + baseUrl);       
        console.log('NGC get URL: ' + baseUrl+'/' + CONFIG.baseUrls.getNGCData);

       

        var baseUrl = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');     

         return this._http.get(baseUrl+'/' + CONFIG.baseUrls.getNGCData)
            .map((response: Response) => response.json())            
            .do(data => console.log('NGC.json - JSON string data: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.log('handleError called');
        return Observable.throw(error || 'Server error while getting NGC data.')

    }

    DummyData(){
        var baseUrl = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');     

         return this._http.get(baseUrl+'/' + CONFIG.baseUrls.getNGCData)
            .map((response: Response) => response.json())            
            .do(data => console.log('NGC.json - JSON string data: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

}
