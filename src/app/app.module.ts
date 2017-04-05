import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeView } from './home/home-view.component';
import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';
import { FooterComponent } from './globals/footer/footer.component';
import { HeaderComponent } from './globals/header/header.component';
import { MaterialsBclightModule } from './materials-bclight/materials-bclight.module';
import { AppRoutingModule } from './app-routing.module';
import { GlobalsModule } from './globals/globals.module';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    MaterialsBclightModule,
    TransferHttpModule,
    AppRoutingModule,
    GlobalsModule
  ],
  declarations: [AppComponent, HomeView, FooterComponent, HeaderComponent],
  exports: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
