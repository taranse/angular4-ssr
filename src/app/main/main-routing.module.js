import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
var routes = [
    { path: '', component: MainComponent },
    { path: '#main', component: MainComponent }
];
var MainRoutingModule = (function () {
    function MainRoutingModule() {
    }
    return MainRoutingModule;
}());
export { MainRoutingModule };
MainRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            },] },
];
/** @nocollapse */
MainRoutingModule.ctorParameters = function () { return []; };
