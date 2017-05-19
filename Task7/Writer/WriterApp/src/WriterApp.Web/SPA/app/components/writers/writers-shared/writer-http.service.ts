import { Injectable } from "@angular/core";
import { AppConfig } from "../../../config/config";
import { HttpService } from "../../../shared-component/services/http.service";
import 'rxjs/Rx';
@Injectable()
export class WriterHttpService {
    constructor(private _httpService: HttpService) { }

    getWriterById(id: number) {
        return this._httpService.get(AppConfig.urls.writer + "/" + id)
            .map(res => res.json());
    }
    getSortingCustomers(sortBy: string, orderBy: string, pageNumber: number) {
        return this._httpService.get(AppConfig.urls.writer
            + "?sortOrder=" + sortBy + "&direction=" + orderBy + "&page=" + pageNumber)
            .map(res => res.json());
    }
    getWriters() {
        return this._httpService.get(AppConfig.urls.writer)
            .map(res => res.json());
    }
    postCustomer(data) {
        return this._httpService.post(AppConfig.urls.writer, data)
            .map(res => res.json());
    }
    putCustomer(id, data) {
        return this._httpService.put(AppConfig.urls.writer + "/" + id, data)
            .map(res => res.json());
    }
    deleteCustomer(id) {
        return this._httpService.delete(AppConfig.urls.writer + "/" + id)
            .map(res => res.json());
    }
}