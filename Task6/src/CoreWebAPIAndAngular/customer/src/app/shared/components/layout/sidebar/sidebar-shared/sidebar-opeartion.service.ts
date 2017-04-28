import { Injectable } from '@angular/core';

@Injectable()
export class SidebarOpeartionService {

    constructor() { }
    getSidebarItem() {
        return [
            { text: 'customers', link: '/customer', iconUrl: 'src/assets/images/icons/person.svg' }
        ];
    }
}
