import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbNavModule } from './mdb-nav/mdb-nav.module';
import { MdbButtonModule } from './mdb-button/mdb-button.module';
import { MdbSidenavModule } from './mdb-sidenav/mdb-sidenav.module';

@NgModule({
  imports: [
    CommonModule,
    MdbNavModule,
    MdbButtonModule,
    MdbSidenavModule
  ],
  declarations: [],
  exports: [MdbNavModule, MdbButtonModule, MdbSidenavModule]
})
export class MaterialsBclightModule {

}
