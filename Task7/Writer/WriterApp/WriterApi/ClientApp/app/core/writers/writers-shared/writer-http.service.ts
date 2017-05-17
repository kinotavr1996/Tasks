import { Injectable } from "@angular/core";
import { AppConfig } from "../../../config/config";
import { HttpService } from "../../../shared/services/http.service";

@Injectable()
export class WriterHttpService {
    constructor(private _httpService: HttpService) { }

    getCustomers() {
        return this._httpService.get(AppConfig.urls.writers)
            .map(res => res.json());
    }
    getSortingCustomers(sortBy: string, orderBy: string, pageNumber: number) {
        return this._httpService.get(AppConfig.urls.writers
            + "?sortOrder=" + sortBy + "&direction=" + orderBy + "&page=" + pageNumber)
            .map(res => res.json());
    }
    postCustomer(data) {
        return this._httpService.post(AppConfig.urls.writers, data)
            .map(res => res.json());
    }
}