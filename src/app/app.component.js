import { Component } from '@angular/core';
import { TransferState } from '../modules/transfer-state/transfer-state';
var AppComponent = (function () {
    function AppComponent(cache) {
        this.cache = cache;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.cache.set('cached', true);
    };
    return AppComponent;
}());
export { AppComponent };
AppComponent.decorators = [
    { type: Component, args: [{
                selector: 'demo-app',
                templateUrl: 'app.component.html',
            },] },
];
/** @nocollapse */
AppComponent.ctorParameters = function () { return [
    { type: TransferState, },
]; };
