import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeView } from './home/home-view.component';
import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';
import { FooterComponent } from './globals/footer/footer.component';
import { HeaderComponent } from './globals/header/header.component';
import { MaterialsBclightModule } from './materials-bclight/materials-bclight.module';
//import { MdButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    MaterialsBclightModule,
    TransferHttpModule,
    RouterModule.forRoot([
      {path: 'lazy', loadChildren: './+lazy/lazy.module#LazyModule'},
      {path: 'about', loadChildren: './+lazy/lazy.module#LazyModule'},
      {path: '', loadChildren: './main/main.module#MainModule'}
    ])
  ],
  declarations: [AppComponent, HomeView, FooterComponent, HeaderComponent],
  exports: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
