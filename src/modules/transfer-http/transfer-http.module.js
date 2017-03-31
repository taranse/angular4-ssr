import { NgModule } from '@angular/core';
import { TransferHttp } from './transfer-http';
var TransferHttpModule = (function () {
    function TransferHttpModule() {
    }
    return TransferHttpModule;
}());
export { TransferHttpModule };
TransferHttpModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    TransferHttp
                ]
            },] },
];
/** @nocollapse */
TransferHttpModule.ctorParameters = function () { return []; };
