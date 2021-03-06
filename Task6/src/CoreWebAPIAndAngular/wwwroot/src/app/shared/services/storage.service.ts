import { AppConfig } from './../../config/config';
import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
    private keyPrefix: string;

    constructor() {
        this.keyPrefix = AppConfig.projectName;
    }

    private _getKey(key: string): string {
        key = key.trim();
        if (key.length < 0) { return ''; }
        return `${this.keyPrefix}_${key}`;
    }

    public setItem(key: string, value: string): void {
        localStorage.setItem(this._getKey(key), value);
    }

    public getItem(key: string): string {
        return localStorage.getItem(this._getKey(key));
    }

    public removeItem(key: string): void {
        localStorage.removeItem(this._getKey(key));
    }
}
