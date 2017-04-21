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
var validator_property_model_1 = require('./../../../models/validator-property.model');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var noop = function () {
};
exports.CUSTOM_SELECT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return CustomSelectComponent; }),
    multi: true
};
var CustomSelectComponent = (function () {
    function CustomSelectComponent() {
        // The internal data model
        this.innerValue = '';
        // Placeholders for the callbacks which are later providesd
        // by the Control Value Accessor
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(CustomSelectComponent.prototype, "value", {
        // get accessor
        get: function () {
            return this.innerValue;
        },
        // set accessor including call the onchange callback
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    // Set touched on blur
    CustomSelectComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    // From ControlValueAccessor interface
    CustomSelectComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    // From ControlValueAccessor interface
    CustomSelectComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    // From ControlValueAccessor interface
    CustomSelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CustomSelectComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CustomSelectComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CustomSelectComponent.prototype, "values", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', validator_property_model_1.ValidationPropertyModel)
    ], CustomSelectComponent.prototype, "validator", void 0);
    CustomSelectComponent = __decorate([
        core_1.Component({
            selector: 'custom-select',
            templateUrl: './select.component.html',
            styleUrls: ['./select.component.less'],
            providers: [exports.CUSTOM_SELECT_CONTROL_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [])
    ], CustomSelectComponent);
    return CustomSelectComponent;
}());
exports.CustomSelectComponent = CustomSelectComponent;
//# sourceMappingURL=select.component.js.map