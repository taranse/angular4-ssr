/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../../../app/main/main-routing.module';
import * as import2 from '@angular/router';
import * as import3 from './main.component.ngfactory';
import * as import4 from '../../../../app/main/main.component';
class MainRoutingModuleInjector extends import0.ɵNgModuleInjector<import1.MainRoutingModule> {
  _RouterModule_0:import2.RouterModule;
  _MainRoutingModule_1:import1.MainRoutingModule;
  _ROUTES_2:any[];
  constructor(parent:import0.Injector) {
    super(parent,[import3.MainComponentNgFactory],([] as any[]));
  }
  createInternal():import1.MainRoutingModule {
    this._RouterModule_0 = new import2.RouterModule(this.parent.get(import2.ɵa,(null as any)),this.parent.get(import2.Router,(null as any)));
    this._MainRoutingModule_1 = new import1.MainRoutingModule();
      this._ROUTES_2 = [[
        {
          path: '',
          component: import4.MainComponent
        }
        ,
        {
          path: '#main',
          component: import4.MainComponent
        }

      ]
    ];
    return this._MainRoutingModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.RouterModule)) { return this._RouterModule_0; }
    if ((token === import1.MainRoutingModule)) { return this._MainRoutingModule_1; }
    if ((token === import2.ROUTES)) { return this._ROUTES_2; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const MainRoutingModuleNgFactory:import0.NgModuleFactory<import1.MainRoutingModule> = new import0.NgModuleFactory<any>(MainRoutingModuleInjector,import1.MainRoutingModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovV29yay9hbmd1bGFyMi1zZXJ2ZXItdGVzdC9hbmd1bGFyNC1zc3Ivc3JjL2FwcC9tYWluL21haW4tcm91dGluZy5tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vRDovV29yay9hbmd1bGFyMi1zZXJ2ZXItdGVzdC9hbmd1bGFyNC1zc3Ivc3JjL2FwcC9tYWluL21haW4tcm91dGluZy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
