import { Component, OnInit } from "@angular/core";

@Component({
    template: require("./book.component.html"),
    styles: [require("./book.component.css")]
})
export class BooksComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
