import { HeaderHttpService } from './header-shared/header-http.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-layout-header',
    styleUrls: ['./header.component.less'],
    templateUrl: './header.component.html',
    providers: [HeaderHttpService]
})

export class HeaderComponent { }
