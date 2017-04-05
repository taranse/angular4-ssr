import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { MaterialsBclightModule } from '../materials-bclight/materials-bclight.module';
var GlobalsModule = (function () {
    function GlobalsModule() {
    }
    return GlobalsModule;
}());
export { GlobalsModule };
GlobalsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MaterialsBclightModule
                ],
                declarations: [LogoComponent, ItemCardComponent],
                exports: [LogoComponent, ItemCardComponent]
            },] },
];
/** @nocollapse */
GlobalsModule.ctorParameters = function () { return []; };
