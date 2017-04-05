/**
 * Created by Evgeniy on 04.04.2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    { path: 'lazy', loadChildren: './+lazy/lazy.module#LazyModule' },
    { path: 'about', loadChildren: './+lazy/lazy.module#LazyModule' },
    { path: '', loadChildren: './main/main.module#MainModule' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
export { AppRoutingModule };
AppRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forRoot(routes)],
                exports: [RouterModule]
            },] },
];
/** @nocollapse */
AppRoutingModule.ctorParameters = function () { return []; };
