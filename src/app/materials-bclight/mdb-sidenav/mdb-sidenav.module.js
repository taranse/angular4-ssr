import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbSidenavComponent } from './mdb-sidenav.component';
var MdbSidenavModule = (function () {
    function MdbSidenavModule() {
    }
    return MdbSidenavModule;
}());
export { MdbSidenavModule };
MdbSidenavModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [MdbSidenavComponent],
                exports: [MdbSidenavComponent]
            },] },
];
/** @nocollapse */
MdbSidenavModule.ctorParameters = function () { return []; };
