/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as import0 from '@angular/core';
import * as import1 from '../../../../app/main/main-routing.module';
import * as import2 from '@angular/router';
import * as import3 from './main.component.ngfactory';
import * as import4 from '../../../../app/main/main.component';
var MainRoutingModuleInjector = (function (_super) {
    __extends(MainRoutingModuleInjector, _super);
    function MainRoutingModuleInjector(parent) {
        return _super.call(this, parent, [import3.MainComponentNgFactory], []) || this;
    }
    MainRoutingModuleInjector.prototype.createInternal = function () {
        this._RouterModule_0 = new import2.RouterModule(this.parent.get(import2.ɵa, null), this.parent.get(import2.Router, null));
        this._MainRoutingModule_1 = new import1.MainRoutingModule();
        this._ROUTES_2 = [[{
                    path: '',
                    component: import4.MainComponent
                }
            ]];
        return this._MainRoutingModule_1;
    };
    MainRoutingModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.RouterModule)) {
            return this._RouterModule_0;
        }
        if ((token === import1.MainRoutingModule)) {
            return this._MainRoutingModule_1;
        }
        if ((token === import2.ROUTES)) {
            return this._ROUTES_2;
        }
        return notFoundResult;
    };
    MainRoutingModuleInjector.prototype.destroyInternal = function () {
    };
    return MainRoutingModuleInjector;
}(import0.ɵNgModuleInjector));
export var MainRoutingModuleNgFactory = new import0.NgModuleFactory(MainRoutingModuleInjector, import1.MainRoutingModule);