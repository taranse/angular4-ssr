import { NgModule, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
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


@NgModule({
  imports: [
    MainRoutingModule,
    CommonModule,
    GlobalsModule,
    MaterialsBclightModule
  ],
  declarations: [MainComponent, BannersComponent, ItemsBlockComponent, SeoTextComponent, FactoryCardComponent, NewsComponent, NewsAnonceComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }
