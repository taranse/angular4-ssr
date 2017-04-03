import { NgModule, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { BannersComponent } from './banners/banners.component';


@NgModule({
  imports: [
    MainRoutingModule
  ],
  declarations: [MainComponent, BannersComponent],
})
export class MainModule { }
