import { ActivatedRoute, Router } from "@angular/router";
import { Component, Input, OnInit, Inject } from "@angular/core";
import { WriterModel } from "../../../model/writer.model";
import { WriterHttpService } from "../writers-shared/writer-http.service";
import { PagerService } from "../../../shared-component/paginator/paginator.component";
import { WriterAddModel } from "../../../model/writer-add.model";

@Component({
    template: require("./writer-add.component.html"),
    styles: [require("./writer-add.component.css")]
})
export class WriterAddComponent implements OnInit {
    model: WriterAddModel;
    public title: 'Test Tour of Heroes';
    constructor(private _httpService: WriterHttpService, private router: Router
    ) { }
    ngOnInit() {
        this.model = new WriterAddModel(null, null, null, null);
    }
    onSubmitForm() {
        this._httpService.postWriter(this.model)
            .subscribe(res => {
                this.router.navigateByUrl("/spa/writers/list");
            });
    }
}