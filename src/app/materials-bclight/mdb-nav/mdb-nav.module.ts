import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbNavComponent } from './mdb-nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MdbNavComponent],
  exports: [MdbNavComponent]
})
export class MdbNavModule { }
