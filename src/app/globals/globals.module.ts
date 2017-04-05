import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { MaterialsBclightModule } from '../materials-bclight/materials-bclight.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialsBclightModule
  ],
  declarations: [LogoComponent, ItemCardComponent],
  exports: [LogoComponent, ItemCardComponent]
})
export class GlobalsModule { }
