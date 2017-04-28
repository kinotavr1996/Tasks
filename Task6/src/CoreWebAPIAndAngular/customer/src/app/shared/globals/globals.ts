import { AppConfig } from './../../config/config';
import { StorageService } from './../services/storage.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserModel } from './../models/user.model';
import { KeyValueModel } from './../models/key-value.model';

@Injectable()
export class Globals {
    public user: BehaviorSubject<UserModel>;
    public uiLanguage: BehaviorSubject<string>;

    constructor(private _storage: StorageService) {
        this.user = new BehaviorSubject<UserModel>(null);
        this.user.next(this.getUserData());

        this.uiLanguage = new BehaviorSubject<string>(null);
        this.uiLanguage.next(this.getUILanguage());
    }

    public getUserData(): UserModel {
        const userData = this._storage.getItem('user');
        if (userData) {
            const user = <UserModel>JSON.parse(userData);
            return UserModel.fromJSON(user);
        }
        return null;
    }

    public getUILanguage(): string {
        const languageData = this._storage.getItem('lang');
        return languageData || AppConfig.defaultLanguage;
    }
}
