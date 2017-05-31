import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component } from '@angular/core';
import { SelectListItem } from "./../../model/select-list-item.model";
import { Input, ElementRef } from '@angular/core';


@Component({
    selector: "app-autocomplete",
    host: {
        "(document:click)": "handleClick($event)",
    },
    template: require("./autocomplete.component.html"),
    styles: [require("./autocomplete.component.css")]
})

export class AutocompleteComponent {
    @Input() items: SelectListItem[];
    @Input() Ids: number[] = [];
    @Output() writersIdsChanged = new EventEmitter<number[]>();
    public writerIds: number[] = [];
    public query = "";
    public filteredList: any[] = [];
    public elementRef: any;
    public selected: SelectListItem[] = [];
    selectedIdx: number;

    constructor(myElement: ElementRef) {
        this.elementRef = myElement;
        this.selectedIdx = -1;
    }
    public ngOnInit(): void {
        if (this.Ids !== null && this.items !== null) {
            for (var _i: number = 0; _i < this.Ids.length; _i++) {
                for (var w of this.items) {
                    if (w.value === this.Ids[_i]) {
                        this.selected.push(new SelectListItem(w.value, w.text));
                    }
                }
            }
        }
    }
    filter(event: any) {
        if (this.query != "") {
            this.filteredList = this.items.filter(function (el: any) {
                return el.text.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
        }
    }
    checker(item: SelectListItem) {
        for (var e of this.selected) {
            if (e.value === item.value) {
                return true;
            }
        }
    }
    select(item: any) {
        this.selected.push(item);
        this.query = "";
        this.writerIds = [];
        for (let w of this.selected)
            this.writerIds.push(w.value);
        this.writersIdsChanged.emit(this.writerIds);
    }

    remove(item: any) {
        this.selected.splice(this.selected.indexOf(item), 1);
        this.filteredList = this.items;
        this.writerIds = [];
        for (let w of this.selected)
            this.writerIds.push(w.value);
        this.writersIdsChanged.emit(this.writerIds);
    }

    handleBlur() {
        if (this.selectedIdx > -1) {
            this.query = this.filteredList[this.selectedIdx];
        }
        this.selectedIdx = -1;
    }
    handleClick(event: any) {
        this.filteredList = this.items;
        var clickedComponent = event.target;
        var inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if (!inside) {
            this.filteredList = [];
        }
        this.selectedIdx = -1;
    }
}