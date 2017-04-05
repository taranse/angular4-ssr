import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbButtonComponent } from './mdb-button.component';
var MdbButtonModule = (function () {
    function MdbButtonModule() {
    }
    return MdbButtonModule;
}());
export { MdbButtonModule };
MdbButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [MdbButtonComponent],
                exports: [MdbButtonComponent]
            },] },
];
/** @nocollapse */
MdbButtonModule.ctorParameters = function () { return []; };
