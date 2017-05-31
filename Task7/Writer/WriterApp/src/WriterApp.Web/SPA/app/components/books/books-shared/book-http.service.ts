import { Injectable } from "@angular/core";
import { AppConfig } from "../../../config/config";
import { HttpService } from "../../../shared-component/services/http.service";
import "rxjs/Rx";
@Injectable()
export class BookHttpService {
    constructor(private _httpService: HttpService) { }

    getBookById(id: number) {
        return this._httpService.get(AppConfig.urls.books + "/" + id)
            .map(res => res.json());
    }
    getSortingBooks(sortBy: string, orderBy: string, pageNumber: number) {
        return this._httpService.get(AppConfig.urls.getAllBook
            + "?sortOrder=" + sortBy + "&direction=" + orderBy + "&page=" + pageNumber)
            .map(res => res.json());
    }
    getBooks() {
        return this._httpService.get(AppConfig.urls.createBook)
            .map(res => res.json());
    }
    postBook(data:any) {
        return this._httpService.post(AppConfig.urls.books, data)
            .map(res => res);
    }
    putBook(id:number, data:any) {
        return this._httpService.put(AppConfig.urls.books + "/" + id, data)
            .map(res => res);
    }
    deleteBook(id:number) {
        return this._httpService.delete(AppConfig.urls.books + "/" + id)
            .map(res => res);
    }
}