import { NgModule } from '@angular/core';
import { LocalizationPipe } from './localization-shared/localization.pipe';
import { LocalizationService } from './localization-shared/localization.service';

@NgModule({
    exports: [
        LocalizationPipe
    ],
    declarations: [
        LocalizationPipe
    ],
    providers: [
        LocalizationService
    ]
})
export class LocalizationModule { }
