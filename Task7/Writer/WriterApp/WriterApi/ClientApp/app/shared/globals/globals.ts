import { AppConfig } from './../../config/config';
import { StorageService } from './../services/storage.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { KeyValueModel } from './../models/key-value.model';
import { WriterModel } from "../models/writer.model";

@Injectable()
export class Globals {
    public user: BehaviorSubject<WriterModel>;
    public uiLanguage: BehaviorSubject<string>;

    constructor(private _storage: StorageService) {
        this.user = new BehaviorSubject<WriterModel>(null);
        this.user.next(this.getUserData());
    }

    public getUserData(): WriterModel {
        const userData = this._storage.getItem('user');
        if (userData) {
            const user = <WriterModel>JSON.parse(userData);
            return WriterModel.fromJSON(user);
        }
        return null;
    }
}
