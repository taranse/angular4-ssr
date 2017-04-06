import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MaterialsBclightModule } from '../materials-bclight/materials-bclight.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialsBclightModule,
    RouterModule
  ],
  declarations: [LogoComponent, ItemCardComponent, FooterComponent, HeaderComponent],
  exports: [LogoComponent, ItemCardComponent, FooterComponent, HeaderComponent]
})
export class GlobalsModule { }
