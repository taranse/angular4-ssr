import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeView } from './home/home-view.component';
import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';
import { FooterComponent } from './globals/footer/footer.component';
import { HeaderComponent } from './globals/header/header.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
export { AppModule };
AppModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpModule,
                    TransferHttpModule,
                    RouterModule.forRoot([
                        { path: '', component: HomeView, pathMatch: 'full' },
                        { path: 'lazy', loadChildren: './+lazy/lazy.module#LazyModule' },
                        { path: 'main', loadChildren: './main/main.module#MainModule' }
                    ])
                ],
                declarations: [AppComponent, HomeView, FooterComponent, HeaderComponent],
                exports: [AppComponent]
            },] },
];
/** @nocollapse */
AppModule.ctorParameters = function () { return []; };
