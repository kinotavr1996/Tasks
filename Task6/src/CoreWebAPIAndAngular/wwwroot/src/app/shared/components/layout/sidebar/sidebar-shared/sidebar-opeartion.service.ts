import { Injectable } from '@angular/core';

@Injectable()
export class SidebarOpeartionService {

    constructor() { }
    getSidebarItem() {
        return [
            //{ text: 'Dashboard', link: '/dashboard', iconUrl: 'src/assets/images/icons/dashboard.png' },
            { text: 'Admins', link: '/admin', iconUrl: 'src/assets/images/icons/person.svg' }
            //{ text: 'Company', link: '/company', iconUrl: 'src/assets/images/icons/group.svg' }
        ];
    }
}
