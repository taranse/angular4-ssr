/**
 * Created by Evgeniy on 04.04.2017.
 */
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'lazy', loadChildren: './+lazy/lazy.module#LazyModule'},
  {path: 'about', loadChildren: './+lazy/lazy.module#LazyModule'},
  {path: '', loadChildren: './main/main.module#MainModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
