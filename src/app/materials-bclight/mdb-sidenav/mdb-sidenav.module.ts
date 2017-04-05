import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbSidenavComponent } from './mdb-sidenav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MdbSidenavComponent],
  exports: [MdbSidenavComponent]
})
export class MdbSidenavModule { }
