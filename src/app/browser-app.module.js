import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { BrowserTransferStateModule } from '../modules/transfer-state/browser-transfer-state.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
var BrowserAppModule = (function () {
    function BrowserAppModule() {
    }
    return BrowserAppModule;
}());
export { BrowserAppModule };
BrowserAppModule.decorators = [
    { type: NgModule, args: [{
                bootstrap: [AppComponent],
                imports: [
                    BrowserAnimationsModule,
                    BrowserModule.withServerTransition({
                        appId: 'my-app-id'
                    }),
                    BrowserTransferStateModule,
                    AppModule
                ]
            },] },
];
/** @nocollapse */
BrowserAppModule.ctorParameters = function () { return []; };
