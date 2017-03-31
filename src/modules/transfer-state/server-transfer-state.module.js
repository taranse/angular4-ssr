import { NgModule } from '@angular/core';
import { ServerTransferState } from './server-transfer-state';
import { TransferState } from './transfer-state';
var ServerTransferStateModule = (function () {
    function ServerTransferStateModule() {
    }
    return ServerTransferStateModule;
}());
export { ServerTransferStateModule };
ServerTransferStateModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    { provide: TransferState, useClass: ServerTransferState }
                ]
            },] },
];
/** @nocollapse */
ServerTransferStateModule.ctorParameters = function () { return []; };
