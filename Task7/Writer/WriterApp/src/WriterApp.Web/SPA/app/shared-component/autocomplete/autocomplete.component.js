"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var select_list_item_model_1 = require("./../../model/select-list-item.model");
var core_1 = require("@angular/core");
var AutocompleteComponent = (function () {
    function AutocompleteComponent(myElement) {
        this.Ids = [];
        this.writersIdsChanged = new core_1.EventEmitter();
        this.writerIds = [];
        this.query = '';
        this.filteredList = [];
        this.selected = [];
        this.elementRef = myElement;
        this.selectedIdx = -1;
    }
    AutocompleteComponent.prototype.ngOnInit = function () {
        if (this.Ids !== null && this.items !== null) {
            for (var _i = 0; _i < this.Ids.length; _i++) {
                for (var _a = 0, _b = this.items; _a < _b.length; _a++) {
                    var w = _b[_a];
                    if (w.value == this.Ids[_i]) {
                        this.selected.push(new select_list_item_model_1.SelectListItem(w.value, w.text));
                    }
                }
            }
        }
    };
    AutocompleteComponent.prototype.filter = function (event) {
        if (this.query != "") {
            this.filteredList = this.items.filter(function (el) {
                return el.text.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
        }
    };
    AutocompleteComponent.prototype.checker = function (item) {
        for (var _a = 0, _b = this.selected; _a < _b.length; _a++) {
            var e = _b[_a];
            if (e.value == item.value)
                return true;
        }
    };
    AutocompleteComponent.prototype.select = function (item) {
        this.selected.push(item);
        this.query = '';
        this.writerIds = [];
        for (var _a = 0, _b = this.selected; _a < _b.length; _a++) {
            var w = _b[_a];
            this.writerIds.push(w.value);
        }
        this.writersIdsChanged.emit(this.writerIds);
    };
    AutocompleteComponent.prototype.remove = function (item) {
        this.selected.splice(this.selected.indexOf(item), 1);
        this.filteredList = this.items;
        this.writerIds = [];
        for (var _a = 0, _b = this.selected; _a < _b.length; _a++) {
            var w = _b[_a];
            this.writerIds.push(w.value);
        }
        this.writersIdsChanged.emit(this.writerIds);
    };
    AutocompleteComponent.prototype.handleBlur = function () {
        if (this.selectedIdx > -1) {
            this.query = this.filteredList[this.selectedIdx];
        }
        this.selectedIdx = -1;
    };
    AutocompleteComponent.prototype.handleClick = function (event) {
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
    };
    return AutocompleteComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AutocompleteComponent.prototype, "items", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AutocompleteComponent.prototype, "Ids", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AutocompleteComponent.prototype, "writersIdsChanged", void 0);
AutocompleteComponent = __decorate([
    core_1.Component({
        selector: 'app-autocomplete',
        host: {
            '(document:click)': 'handleClick($event)',
        },
        template: require('./autocomplete.component.html'),
        styles: [require('./autocomplete.component.css')]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], AutocompleteComponent);
exports.AutocompleteComponent = AutocompleteComponent;
//# sourceMappingURL=autocomplete.component.js.map