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
import * as import1 from '../../../../modules/transfer-http/transfer-http.module';
import * as import2 from '../../../../modules/transfer-http/transfer-http';
import * as import3 from '@angular/http';
import * as import4 from '../../../../modules/transfer-state/transfer-state';
var TransferHttpModuleInjector = (function (_super) {
    __extends(TransferHttpModuleInjector, _super);
    function TransferHttpModuleInjector(parent) {
        return _super.call(this, parent, [], []) || this;
    }
    Object.defineProperty(TransferHttpModuleInjector.prototype, "_TransferHttp_1", {
        get: function () {
            if ((this.__TransferHttp_1 == null)) {
                (this.__TransferHttp_1 = new import2.TransferHttp(this.parent.get(import3.Http), this.parent.get(import4.TransferState)));
            }
            return this.__TransferHttp_1;
        },
        enumerable: true,
        configurable: true
    });
    TransferHttpModuleInjector.prototype.createInternal = function () {
        this._TransferHttpModule_0 = new import1.TransferHttpModule();
        return this._TransferHttpModule_0;
    };
    TransferHttpModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import1.TransferHttpModule)) {
            return this._TransferHttpModule_0;
        }
        if ((token === import2.TransferHttp)) {
            return this._TransferHttp_1;
        }
        return notFoundResult;
    };
    TransferHttpModuleInjector.prototype.destroyInternal = function () {
    };
    return TransferHttpModuleInjector;
}(import0.ɵNgModuleInjector));
export var TransferHttpModuleNgFactory = new import0.NgModuleFactory(TransferHttpModuleInjector, import1.TransferHttpModule);