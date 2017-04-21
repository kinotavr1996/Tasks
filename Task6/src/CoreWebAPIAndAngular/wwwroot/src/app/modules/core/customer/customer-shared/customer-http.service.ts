import { Injectable } from "@angular/core";
import { HttpService } from "app/shared/services/http.service";
import { AppConfig } from "app/config/config";

@Injectable()
export class CustomerHttpService {
    constructor(private _httpService: HttpService) { }

    getCustomers() {
        return this._httpService.get(AppConfig.urls.customers)
            .map(res => res.json());
    }
    getSortingCustomers(sortBy: string, orderBy: string) {
        return this._httpService.get(AppConfig.urls.customers
            + "?sortBy=" + sortBy + "&orderBy=" + orderBy)
            .map(res => res.json());
    }
    postCustomer(data) {
        return this._httpService.post(AppConfig.urls.customers, data)
            .map(res => res.json());
    }
}