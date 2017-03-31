import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
export { MainModule };
MainModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MainRoutingModule
                ],
                declarations: [MainComponent]
            },] },
];
/** @nocollapse */
MainModule.ctorParameters = function () { return []; };
