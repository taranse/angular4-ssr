import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ServerTransferStateModule } from '../modules/transfer-state/server-transfer-state.module';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { TransferState } from '../modules/transfer-state/transfer-state';
import { BrowserModule } from '@angular/platform-browser';
var ServerAppModule = (function () {
    function ServerAppModule(transferState) {
        var _this = this;
        this.transferState = transferState;
        // Gotcha
        this.ngOnBootstrap = function () {
            _this.transferState.inject();
        };
    }
    return ServerAppModule;
}());
export { ServerAppModule };
ServerAppModule.decorators = [
    { type: NgModule, args: [{
                bootstrap: [AppComponent],
                imports: [
                    BrowserModule.withServerTransition({
                        appId: 'my-app-id'
                    }),
                    ServerModule,
                    ServerTransferStateModule,
                    AppModule
                ],
                providers: []
            },] },
];
/** @nocollapse */
ServerAppModule.ctorParameters = function () { return [
    { type: TransferState, },
]; };
