import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { BannersComponent } from './banners/banners.component';
import { ItemsBlockComponent } from './items-block/items-block.component';
import { SeoTextComponent } from './seo-text/seo-text.component';
import { GlobalsModule } from '../globals/globals.module';
import { MaterialsBclightModule } from '../materials-bclight/materials-bclight.module';
import { FactoryCardComponent } from './factory-card/factory-card.component';
import { NewsComponent } from './news/news.component';
import { NewsAnonceComponent } from './news-anonce/news-anonce.component';
var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
export { MainModule };
MainModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MainRoutingModule,
                    CommonModule,
                    GlobalsModule,
                    MaterialsBclightModule
                ],
                declarations: [MainComponent, BannersComponent, ItemsBlockComponent, SeoTextComponent, FactoryCardComponent, NewsComponent, NewsAnonceComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] },
];
/** @nocollapse */
MainModule.ctorParameters = function () { return []; };
