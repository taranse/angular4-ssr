import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbButtonComponent } from './mdb-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MdbButtonComponent],
  exports: [MdbButtonComponent]
})
export class MdbButtonModule { }
