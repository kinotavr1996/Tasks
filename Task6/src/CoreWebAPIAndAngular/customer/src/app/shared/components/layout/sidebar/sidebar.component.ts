import { SidebarItemModel } from './sidebar-shared/sidebar-item.model';
import { ActivatedRoute } from '@angular/router';
import { SidebarOpeartionService } from './sidebar-shared/sidebar-opeartion.service';
import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.less'],
    providers: [SidebarOpeartionService]
})
export class SidebarComponent implements OnInit, OnDestroy {
    public sidebarItems: SidebarItemModel[];
    sub: any;

    constructor(
        private _operationService: SidebarOpeartionService,
        private _route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            console.log(params);
        });
        this.sidebarItems = SidebarItemModel.fromJSONArray(this._operationService.getSidebarItem());
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
