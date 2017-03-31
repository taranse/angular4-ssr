/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../../app/server-app.module';
import * as import2 from '@angular/common';
import * as import3 from '@angular/router';
import * as import4 from '@angular/platform-browser';
import * as import5 from '@angular/http';
import * as import6 from '@angular/platform-browser/animations';
import * as import7 from '@angular/platform-server';
import * as import8 from '../../../modules/transfer-state/server-transfer-state.module';
import * as import9 from '../../../modules/transfer-http/transfer-http.module';
import * as import10 from '../../../app/app.module';
import * as import11 from '@angular/animations/browser';
import * as import12 from '../../../modules/transfer-state/server-transfer-state';
import * as import13 from '../../../modules/transfer-http/transfer-http';
import * as import14 from './home/home-view.component.ngfactory';
import * as import15 from './app.component.ngfactory';
import * as import16 from '../../../app/home/home-view.component';
import * as import17 from '../../../modules/transfer-state/transfer-state';
class ServerAppModuleInjector extends import0.ɵNgModuleInjector<import1.ServerAppModule> {
  _CommonModule_0:import2.CommonModule;
  _ErrorHandler_1:any;
  _NgProbeToken_2:any[];
  _ɵg_3:import3.ɵg;
  _APP_ID_4:any;
  _ɵTRANSITION_ID_5:any;
  _APP_INITIALIZER_6:any[];
  _ApplicationInitStatus_7:import0.ApplicationInitStatus;
  _ɵf_8:import0.ɵf;
  _ApplicationRef_9:any;
  _ApplicationModule_10:import0.ApplicationModule;
  _BrowserModule_11:import4.BrowserModule;
  _HttpModule_12:import5.HttpModule;
  _NoopAnimationsModule_13:import6.NoopAnimationsModule;
  _ServerModule_14:import7.ServerModule;
  _ServerTransferStateModule_15:import8.ServerTransferStateModule;
  _TransferHttpModule_16:import9.TransferHttpModule;
  _ɵa_17:any;
  _UrlSerializer_18:import3.DefaultUrlSerializer;
  _RouterOutletMap_19:import3.RouterOutletMap;
  _ROUTER_CONFIGURATION_20:any;
  _LocationStrategy_21:any;
  _Location_22:import2.Location;
  _Compiler_23:import0.Compiler;
  _NgModuleFactoryLoader_24:import0.SystemJsNgModuleLoader;
  _ROUTES_25:any[];
  _Router_26:any;
  _RouterModule_27:import3.RouterModule;
  _AppModule_28:import10.AppModule;
  _ɵb_29:import7.ɵb;
  _ɵSharedStylesHost_30:any;
  _ɵServerRendererFactory2_31:import7.ɵServerRendererFactory2;
  _ɵAnimationEngine_32:import11.ɵNoopAnimationEngine;
  _RendererFactory2_33:any;
  _TransferState_34:import12.ServerTransferState;
  _ServerAppModule_35:import1.ServerAppModule;
  __LOCALE_ID_36:any;
  __NgLocalization_37:import2.NgLocaleLocalization;
  __IterableDiffers_38:any;
  __KeyValueDiffers_39:any;
  __DomSanitizer_40:import4.ɵe;
  __Sanitizer_41:any;
  __HAMMER_GESTURE_CONFIG_42:import4.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_43:any[];
  __EventManager_44:import4.EventManager;
  __ɵDomSharedStylesHost_45:import4.ɵDomSharedStylesHost;
  __ɵDomRendererFactory2_46:import4.ɵDomRendererFactory2;
  __Testability_47:any;
  __Meta_48:import4.Meta;
  __Title_49:import4.Title;
  __BrowserXhr_50:import7.ɵc;
  __ResponseOptions_51:import5.BaseResponseOptions;
  __XSRFStrategy_52:import7.ɵd;
  __XHRBackend_53:import5.XHRBackend;
  __RequestOptions_54:import5.BaseRequestOptions;
  __Http_55:any;
  __TransferHttp_56:import13.TransferHttp;
  __ActivatedRoute_57:any;
  __NoPreloading_58:import3.NoPreloading;
  __PreloadingStrategy_59:any;
  __RouterPreloader_60:import3.RouterPreloader;
  __PreloadAllModules_61:import3.PreloadAllModules;
  __ROUTER_INITIALIZER_62:any;
  __APP_BOOTSTRAP_LISTENER_63:any[];
  constructor(parent:import0.Injector) {
    super(parent,[
      import14.HomeViewNgFactory,
      import15.AppComponentNgFactory
    ]
    ,[import15.AppComponentNgFactory]);
  }
  get _LOCALE_ID_36():any {
    if ((this.__LOCALE_ID_36 == null)) { (this.__LOCALE_ID_36 = import0.ɵn(this.parent.get(import0.LOCALE_ID,(null as any)))); }
    return this.__LOCALE_ID_36;
  }
  get _NgLocalization_37():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_37 == null)) { (this.__NgLocalization_37 = new import2.NgLocaleLocalization(this._LOCALE_ID_36)); }
    return this.__NgLocalization_37;
  }
  get _IterableDiffers_38():any {
    if ((this.__IterableDiffers_38 == null)) { (this.__IterableDiffers_38 = import0.ɵl()); }
    return this.__IterableDiffers_38;
  }
  get _KeyValueDiffers_39():any {
    if ((this.__KeyValueDiffers_39 == null)) { (this.__KeyValueDiffers_39 = import0.ɵm()); }
    return this.__KeyValueDiffers_39;
  }
  get _DomSanitizer_40():import4.ɵe {
    if ((this.__DomSanitizer_40 == null)) { (this.__DomSanitizer_40 = new import4.ɵe(this.parent.get(import4.DOCUMENT))); }
    return this.__DomSanitizer_40;
  }
  get _Sanitizer_41():any {
    if ((this.__Sanitizer_41 == null)) { (this.__Sanitizer_41 = this._DomSanitizer_40); }
    return this.__Sanitizer_41;
  }
  get _HAMMER_GESTURE_CONFIG_42():import4.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_42 == null)) { (this.__HAMMER_GESTURE_CONFIG_42 = new import4.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_42;
  }
  get _EVENT_MANAGER_PLUGINS_43():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_43 == null)) { (this.__EVENT_MANAGER_PLUGINS_43 = [
      new import4.ɵDomEventsPlugin(this.parent.get(import4.DOCUMENT)),
      new import4.ɵKeyEventsPlugin(this.parent.get(import4.DOCUMENT)),
      new import4.ɵHammerGesturesPlugin(this.parent.get(import4.DOCUMENT),this._HAMMER_GESTURE_CONFIG_42)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_43;
  }
  get _EventManager_44():import4.EventManager {
    if ((this.__EventManager_44 == null)) { (this.__EventManager_44 = new import4.EventManager(this._EVENT_MANAGER_PLUGINS_43,this.parent.get(import0.NgZone))); }
    return this.__EventManager_44;
  }
  get _ɵDomSharedStylesHost_45():import4.ɵDomSharedStylesHost {
    if ((this.__ɵDomSharedStylesHost_45 == null)) { (this.__ɵDomSharedStylesHost_45 = new import4.ɵDomSharedStylesHost(this.parent.get(import4.DOCUMENT))); }
    return this.__ɵDomSharedStylesHost_45;
  }
  get _ɵDomRendererFactory2_46():import4.ɵDomRendererFactory2 {
    if ((this.__ɵDomRendererFactory2_46 == null)) { (this.__ɵDomRendererFactory2_46 = new import4.ɵDomRendererFactory2(this._EventManager_44,this._ɵDomSharedStylesHost_45)); }
    return this.__ɵDomRendererFactory2_46;
  }
  get _Testability_47():any {
    if ((this.__Testability_47 == null)) { (this.__Testability_47 = (null as any)); }
    return this.__Testability_47;
  }
  get _Meta_48():import4.Meta {
    if ((this.__Meta_48 == null)) { (this.__Meta_48 = new import4.Meta(this.parent.get(import4.DOCUMENT))); }
    return this.__Meta_48;
  }
  get _Title_49():import4.Title {
    if ((this.__Title_49 == null)) { (this.__Title_49 = new import4.Title(this.parent.get(import4.DOCUMENT))); }
    return this.__Title_49;
  }
  get _BrowserXhr_50():import7.ɵc {
    if ((this.__BrowserXhr_50 == null)) { (this.__BrowserXhr_50 = new import7.ɵc()); }
    return this.__BrowserXhr_50;
  }
  get _ResponseOptions_51():import5.BaseResponseOptions {
    if ((this.__ResponseOptions_51 == null)) { (this.__ResponseOptions_51 = new import5.BaseResponseOptions()); }
    return this.__ResponseOptions_51;
  }
  get _XSRFStrategy_52():import7.ɵd {
    if ((this.__XSRFStrategy_52 == null)) { (this.__XSRFStrategy_52 = new import7.ɵd()); }
    return this.__XSRFStrategy_52;
  }
  get _XHRBackend_53():import5.XHRBackend {
    if ((this.__XHRBackend_53 == null)) { (this.__XHRBackend_53 = new import5.XHRBackend(this._BrowserXhr_50,this._ResponseOptions_51,this._XSRFStrategy_52)); }
    return this.__XHRBackend_53;
  }
  get _RequestOptions_54():import5.BaseRequestOptions {
    if ((this.__RequestOptions_54 == null)) { (this.__RequestOptions_54 = new import5.BaseRequestOptions()); }
    return this.__RequestOptions_54;
  }
  get _Http_55():any {
    if ((this.__Http_55 == null)) { (this.__Http_55 = import7.ɵe(this._XHRBackend_53,this._RequestOptions_54)); }
    return this.__Http_55;
  }
  get _TransferHttp_56():import13.TransferHttp {
    if ((this.__TransferHttp_56 == null)) { (this.__TransferHttp_56 = new import13.TransferHttp(this._Http_55,this._TransferState_34)); }
    return this.__TransferHttp_56;
  }
  get _ActivatedRoute_57():any {
    if ((this.__ActivatedRoute_57 == null)) { (this.__ActivatedRoute_57 = import3.ɵf(this._Router_26)); }
    return this.__ActivatedRoute_57;
  }
  get _NoPreloading_58():import3.NoPreloading {
    if ((this.__NoPreloading_58 == null)) { (this.__NoPreloading_58 = new import3.NoPreloading()); }
    return this.__NoPreloading_58;
  }
  get _PreloadingStrategy_59():any {
    if ((this.__PreloadingStrategy_59 == null)) { (this.__PreloadingStrategy_59 = this._NoPreloading_58); }
    return this.__PreloadingStrategy_59;
  }
  get _RouterPreloader_60():import3.RouterPreloader {
    if ((this.__RouterPreloader_60 == null)) { (this.__RouterPreloader_60 = new import3.RouterPreloader(this._Router_26,this._NgModuleFactoryLoader_24,this._Compiler_23,this,this._PreloadingStrategy_59)); }
    return this.__RouterPreloader_60;
  }
  get _PreloadAllModules_61():import3.PreloadAllModules {
    if ((this.__PreloadAllModules_61 == null)) { (this.__PreloadAllModules_61 = new import3.PreloadAllModules()); }
    return this.__PreloadAllModules_61;
  }
  get _ROUTER_INITIALIZER_62():any {
    if ((this.__ROUTER_INITIALIZER_62 == null)) { (this.__ROUTER_INITIALIZER_62 = import3.ɵi(this._ɵg_3)); }
    return this.__ROUTER_INITIALIZER_62;
  }
  get _APP_BOOTSTRAP_LISTENER_63():any[] {
    if ((this.__APP_BOOTSTRAP_LISTENER_63 == null)) { (this.__APP_BOOTSTRAP_LISTENER_63 = [this._ROUTER_INITIALIZER_62]); }
    return this.__APP_BOOTSTRAP_LISTENER_63;
  }
  createInternal():import1.ServerAppModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ErrorHandler_1 = import4.ɵa();
    this._NgProbeToken_2 = [import3.ɵb()];
    this._ɵg_3 = new import3.ɵg(this);
    this._APP_ID_4 = 'my-app-id';
    this._ɵTRANSITION_ID_5 = this._APP_ID_4;
    this._APP_INITIALIZER_6 = [
      import0.ɵo,
      import4.ɵc(this.parent.get(import4.NgProbeToken,(null as any)),this._NgProbeToken_2),
      import3.ɵh(this._ɵg_3),
      import4.ɵf(this._ɵTRANSITION_ID_5,this.parent.get(import4.DOCUMENT))
    ]
    ;
    this._ApplicationInitStatus_7 = new import0.ApplicationInitStatus(this._APP_INITIALIZER_6);
    this._ɵf_8 = new import0.ɵf(this.parent.get(import0.NgZone),this.parent.get(import0.ɵConsole),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_7);
    this._ApplicationRef_9 = this._ɵf_8;
    this._ApplicationModule_10 = new import0.ApplicationModule(this._ApplicationRef_9);
    this._BrowserModule_11 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._HttpModule_12 = new import5.HttpModule();
    this._NoopAnimationsModule_13 = new import6.NoopAnimationsModule();
    this._ServerModule_14 = new import7.ServerModule();
    this._ServerTransferStateModule_15 = new import8.ServerTransferStateModule();
    this._TransferHttpModule_16 = new import9.TransferHttpModule();
    this._ɵa_17 = import3.ɵd(this.parent.get(import3.Router,(null as any)));
    this._UrlSerializer_18 = new import3.DefaultUrlSerializer();
    this._RouterOutletMap_19 = new import3.RouterOutletMap();
    this._ROUTER_CONFIGURATION_20 = {};
    this._LocationStrategy_21 = import3.ɵc(this.parent.get(import2.PlatformLocation),this.parent.get(import2.APP_BASE_HREF,(null as any)),this._ROUTER_CONFIGURATION_20);
    this._Location_22 = new import2.Location(this._LocationStrategy_21);
    this._Compiler_23 = new import0.Compiler();
    this._NgModuleFactoryLoader_24 = new import0.SystemJsNgModuleLoader(this._Compiler_23,this.parent.get(import0.SystemJsNgModuleLoaderConfig,(null as any)));
      this._ROUTES_25 = [[
        {
          path: '',
          component: import16.HomeView,
          pathMatch: 'full'
        }
        ,
        {
          path: 'lazy',
          loadChildren: './+lazy/lazy.module#LazyModule'
        }
        ,
        {
          path: 'main',
          loadChildren: './main/main.module#MainModule'
        }

      ]
    ];
    this._Router_26 = import3.ɵe(this._ApplicationRef_9,this._UrlSerializer_18,this._RouterOutletMap_19,this._Location_22,this,this._NgModuleFactoryLoader_24,this._Compiler_23,this._ROUTES_25,this._ROUTER_CONFIGURATION_20,this.parent.get(import3.UrlHandlingStrategy,(null as any)),this.parent.get(import3.RouteReuseStrategy,(null as any)));
    this._RouterModule_27 = new import3.RouterModule(this._ɵa_17,this._Router_26);
    this._AppModule_28 = new import10.AppModule();
    this._ɵb_29 = new import7.ɵb(this.parent.get(import4.DOCUMENT),this._ɵTRANSITION_ID_5);
    this._ɵSharedStylesHost_30 = this._ɵb_29;
    this._ɵServerRendererFactory2_31 = new import7.ɵServerRendererFactory2(this.parent.get(import0.NgZone),this.parent.get(import4.DOCUMENT),this._ɵSharedStylesHost_30);
    this._ɵAnimationEngine_32 = new import11.ɵNoopAnimationEngine();
    this._RendererFactory2_33 = import7.ɵa(this._ɵServerRendererFactory2_31,this._ɵAnimationEngine_32,this.parent.get(import0.NgZone));
    this._TransferState_34 = new import12.ServerTransferState(this.parent.get(import7.PlatformState),this._RendererFactory2_33);
    this._ServerAppModule_35 = new import1.ServerAppModule(this._TransferState_34);
    return this._ServerAppModule_35;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import0.ErrorHandler)) { return this._ErrorHandler_1; }
    if ((token === import0.NgProbeToken)) { return this._NgProbeToken_2; }
    if ((token === import3.ɵg)) { return this._ɵg_3; }
    if ((token === import0.APP_ID)) { return this._APP_ID_4; }
    if ((token === import4.ɵTRANSITION_ID)) { return this._ɵTRANSITION_ID_5; }
    if ((token === import0.APP_INITIALIZER)) { return this._APP_INITIALIZER_6; }
    if ((token === import0.ApplicationInitStatus)) { return this._ApplicationInitStatus_7; }
    if ((token === import0.ɵf)) { return this._ɵf_8; }
    if ((token === import0.ApplicationRef)) { return this._ApplicationRef_9; }
    if ((token === import0.ApplicationModule)) { return this._ApplicationModule_10; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_11; }
    if ((token === import5.HttpModule)) { return this._HttpModule_12; }
    if ((token === import6.NoopAnimationsModule)) { return this._NoopAnimationsModule_13; }
    if ((token === import7.ServerModule)) { return this._ServerModule_14; }
    if ((token === import8.ServerTransferStateModule)) { return this._ServerTransferStateModule_15; }
    if ((token === import9.TransferHttpModule)) { return this._TransferHttpModule_16; }
    if ((token === import3.ɵa)) { return this._ɵa_17; }
    if ((token === import3.UrlSerializer)) { return this._UrlSerializer_18; }
    if ((token === import3.RouterOutletMap)) { return this._RouterOutletMap_19; }
    if ((token === import3.ROUTER_CONFIGURATION)) { return this._ROUTER_CONFIGURATION_20; }
    if ((token === import2.LocationStrategy)) { return this._LocationStrategy_21; }
    if ((token === import2.Location)) { return this._Location_22; }
    if ((token === import0.Compiler)) { return this._Compiler_23; }
    if ((token === import0.NgModuleFactoryLoader)) { return this._NgModuleFactoryLoader_24; }
    if ((token === import3.ROUTES)) { return this._ROUTES_25; }
    if ((token === import3.Router)) { return this._Router_26; }
    if ((token === import3.RouterModule)) { return this._RouterModule_27; }
    if ((token === import10.AppModule)) { return this._AppModule_28; }
    if ((token === import7.ɵb)) { return this._ɵb_29; }
    if ((token === import4.ɵSharedStylesHost)) { return this._ɵSharedStylesHost_30; }
    if ((token === import7.ɵServerRendererFactory2)) { return this._ɵServerRendererFactory2_31; }
    if ((token === import11.ɵAnimationEngine)) { return this._ɵAnimationEngine_32; }
    if ((token === import0.RendererFactory2)) { return this._RendererFactory2_33; }
    if ((token === import17.TransferState)) { return this._TransferState_34; }
    if ((token === import1.ServerAppModule)) { return this._ServerAppModule_35; }
    if ((token === import0.LOCALE_ID)) { return this._LOCALE_ID_36; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_37; }
    if ((token === import0.IterableDiffers)) { return this._IterableDiffers_38; }
    if ((token === import0.KeyValueDiffers)) { return this._KeyValueDiffers_39; }
    if ((token === import4.DomSanitizer)) { return this._DomSanitizer_40; }
    if ((token === import0.Sanitizer)) { return this._Sanitizer_41; }
    if ((token === import4.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_42; }
    if ((token === import4.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_43; }
    if ((token === import4.EventManager)) { return this._EventManager_44; }
    if ((token === import4.ɵDomSharedStylesHost)) { return this._ɵDomSharedStylesHost_45; }
    if ((token === import4.ɵDomRendererFactory2)) { return this._ɵDomRendererFactory2_46; }
    if ((token === import0.Testability)) { return this._Testability_47; }
    if ((token === import4.Meta)) { return this._Meta_48; }
    if ((token === import4.Title)) { return this._Title_49; }
    if ((token === import5.BrowserXhr)) { return this._BrowserXhr_50; }
    if ((token === import5.ResponseOptions)) { return this._ResponseOptions_51; }
    if ((token === import5.XSRFStrategy)) { return this._XSRFStrategy_52; }
    if ((token === import5.XHRBackend)) { return this._XHRBackend_53; }
    if ((token === import5.RequestOptions)) { return this._RequestOptions_54; }
    if ((token === import5.Http)) { return this._Http_55; }
    if ((token === import13.TransferHttp)) { return this._TransferHttp_56; }
    if ((token === import3.ActivatedRoute)) { return this._ActivatedRoute_57; }
    if ((token === import3.NoPreloading)) { return this._NoPreloading_58; }
    if ((token === import3.PreloadingStrategy)) { return this._PreloadingStrategy_59; }
    if ((token === import3.RouterPreloader)) { return this._RouterPreloader_60; }
    if ((token === import3.PreloadAllModules)) { return this._PreloadAllModules_61; }
    if ((token === import3.ROUTER_INITIALIZER)) { return this._ROUTER_INITIALIZER_62; }
    if ((token === import0.APP_BOOTSTRAP_LISTENER)) { return this._APP_BOOTSTRAP_LISTENER_63; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ɵf_8.ngOnDestroy();
    (this.__ɵDomSharedStylesHost_45 && this._ɵDomSharedStylesHost_45.ngOnDestroy());
    (this.__RouterPreloader_60 && this._RouterPreloader_60.ngOnDestroy());
  }
}
export const ServerAppModuleNgFactory:import0.NgModuleFactory<import1.ServerAppModule> = new import0.NgModuleFactory<any>(ServerAppModuleInjector,import1.ServerAppModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovV29yay9hbmd1bGFyMi1zZXJ2ZXItdGVzdC9uZ3UtZGVtby9zcmMvYXBwL3NlcnZlci1hcHAubW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0Q6L1dvcmsvYW5ndWxhcjItc2VydmVyLXRlc3Qvbmd1LWRlbW8vc3JjL2FwcC9zZXJ2ZXItYXBwLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
