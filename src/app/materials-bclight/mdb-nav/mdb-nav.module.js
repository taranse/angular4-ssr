import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbNavComponent } from './mdb-nav.component';
var MdbNavModule = (function () {
    function MdbNavModule() {
    }
    return MdbNavModule;
}());
export { MdbNavModule };
MdbNavModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [MdbNavComponent],
                exports: [MdbNavComponent]
            },] },
];
/** @nocollapse */
MdbNavModule.ctorParameters = function () { return []; };
