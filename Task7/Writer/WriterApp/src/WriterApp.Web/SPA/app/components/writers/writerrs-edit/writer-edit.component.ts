import { WriterEditModel } from "./../../../model/writer-edit.model";
import { WriterHttpService } from "../writers-shared/writer-http.service";
import { PagerService } from "../../../shared-component/paginator/paginator.component";
import { Router, ActivatedRoute, Params } from "@angular/router";
import "rxjs/add/operator/switchMap";
import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
    template: require("./writer-edit.component.html"),
    styles: [require("./writer-edit.component.css")]
})
export class WriterEditComponent {
    model: WriterEditModel;
    id: number;
    private sub: any;
    constructor(private _httpService: WriterHttpService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params["id"];
        });
        this._httpService.getWriterById(this.id)
            .subscribe(res => {
                this.model = WriterEditModel.fromJSON(res);
            });
    }

    onSubmitForm() {
        this._httpService.putWriter(this.id, this.model)
            .subscribe(res => {
                this.model = WriterEditModel.fromJSON(res);
                this.router.navigateByUrl("/spa/writers/list");
            });
    }
}