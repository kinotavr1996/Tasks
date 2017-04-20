import { Component, Input } from '@angular/core';
import { PopupsService } from '../popups-shared/popups.service';
import { ErrorPopupModel } from './error-popup-shared/error-popup.model';

@Component({
    selector: 'error-popup',
    templateUrl: './error-popup.component.html',
    styleUrls: ['./error-popup.component.less']
})
export class ErrorPopupComponent {
    @Input() model: ErrorPopupModel;

    constructor(private _service: PopupsService) { }

    public closePopup() {
        this._service.close(this.model);
    }
}
