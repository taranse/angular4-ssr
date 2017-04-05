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
import * as import1 from '../../../../app/globals/globals.module';
import * as import2 from '@angular/common';
import * as import3 from '../../../../app/materials-bclight/mdb-nav/mdb-nav.module';
import * as import4 from '../../../../app/materials-bclight/mdb-button/mdb-button.module';
import * as import5 from '../../../../app/materials-bclight/mdb-sidenav/mdb-sidenav.module';
import * as import6 from '../../../../app/materials-bclight/materials-bclight.module';
var GlobalsModuleInjector = (function (_super) {
    __extends(GlobalsModuleInjector, _super);
    function GlobalsModuleInjector(parent) {
        return _super.call(this, parent, [], []) || this;
    }
    Object.defineProperty(GlobalsModuleInjector.prototype, "_NgLocalization_6", {
        get: function () {
            if ((this.__NgLocalization_6 == null)) {
                (this.__NgLocalization_6 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID)));
            }
            return this.__NgLocalization_6;
        },
        enumerable: true,
        configurable: true
    });
    GlobalsModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._MdbNavModule_1 = new import3.MdbNavModule();
        this._MdbButtonModule_2 = new import4.MdbButtonModule();
        this._MdbSidenavModule_3 = new import5.MdbSidenavModule();
        this._MaterialsBclightModule_4 = new import6.MaterialsBclightModule();
        this._GlobalsModule_5 = new import1.GlobalsModule();
        return this._GlobalsModule_5;
    };
    GlobalsModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.MdbNavModule)) {
            return this._MdbNavModule_1;
        }
        if ((token === import4.MdbButtonModule)) {
            return this._MdbButtonModule_2;
        }
        if ((token === import5.MdbSidenavModule)) {
            return this._MdbSidenavModule_3;
        }
        if ((token === import6.MaterialsBclightModule)) {
            return this._MaterialsBclightModule_4;
        }
        if ((token === import1.GlobalsModule)) {
            return this._GlobalsModule_5;
        }
        if ((token === import2.NgLocalization)) {
            return this._NgLocalization_6;
        }
        return notFoundResult;
    };
    GlobalsModuleInjector.prototype.destroyInternal = function () {
    };
    return GlobalsModuleInjector;
}(import0.ɵNgModuleInjector));
export var GlobalsModuleNgFactory = new import0.NgModuleFactory(GlobalsModuleInjector, import1.GlobalsModule);