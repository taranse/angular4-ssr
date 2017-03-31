/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../../../modules/transfer-state/browser-transfer-state.module';
import * as import2 from '../../../../modules/transfer-state/transfer-state';
class BrowserTransferStateModuleInjector extends import0.ɵNgModuleInjector<import1.BrowserTransferStateModule> {
  _BrowserTransferStateModule_0:import1.BrowserTransferStateModule;
  __TransferState_1:any;
  constructor(parent:import0.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _TransferState_1():any {
    if ((this.__TransferState_1 == null)) { (this.__TransferState_1 = import1.getTransferState()); }
    return this.__TransferState_1;
  }
  createInternal():import1.BrowserTransferStateModule {
    this._BrowserTransferStateModule_0 = new import1.BrowserTransferStateModule();
    return this._BrowserTransferStateModule_0;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import1.BrowserTransferStateModule)) { return this._BrowserTransferStateModule_0; }
    if ((token === import2.TransferState)) { return this._TransferState_1; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const BrowserTransferStateModuleNgFactory:import0.NgModuleFactory<import1.BrowserTransferStateModule> = new import0.NgModuleFactory<any>(BrowserTransferStateModuleInjector,import1.BrowserTransferStateModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovV29yay9hbmd1bGFyMi1zZXJ2ZXItdGVzdC9uZ3UtZGVtby9zcmMvbW9kdWxlcy90cmFuc2Zlci1zdGF0ZS9icm93c2VyLXRyYW5zZmVyLXN0YXRlLm1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9EOi9Xb3JrL2FuZ3VsYXIyLXNlcnZlci10ZXN0L25ndS1kZW1vL3NyYy9tb2R1bGVzL3RyYW5zZmVyLXN0YXRlL2Jyb3dzZXItdHJhbnNmZXItc3RhdGUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=