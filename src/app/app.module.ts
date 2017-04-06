import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeView } from './home/home-view.component';
import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';
import { MaterialsBclightModule } from './materials-bclight/materials-bclight.module';
import { AppRoutingModule } from './app-routing.module';
import { GlobalsModule } from './globals/globals.module';
import { AliasService, ImageService, ReplacerService } from './services';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    MaterialsBclightModule,
    TransferHttpModule,
    AppRoutingModule,
    GlobalsModule
  ],
  declarations: [AppComponent, HomeView],
  exports: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AliasService, ImageService, ReplacerService]
})
export class AppModule {
}
