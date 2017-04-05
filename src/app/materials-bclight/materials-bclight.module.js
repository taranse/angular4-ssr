import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbNavModule } from './mdb-nav/mdb-nav.module';
import { MdbButtonModule } from './mdb-button/mdb-button.module';
import { MdbSidenavModule } from './mdb-sidenav/mdb-sidenav.module';
var MaterialsBclightModule = (function () {
    function MaterialsBclightModule() {
    }
    return MaterialsBclightModule;
}());
export { MaterialsBclightModule };
MaterialsBclightModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MdbNavModule,
                    MdbButtonModule,
                    MdbSidenavModule
                ],
                declarations: [],
                exports: [MdbNavModule, MdbButtonModule, MdbSidenavModule]
            },] },
];
/** @nocollapse */
MaterialsBclightModule.ctorParameters = function () { return []; };
