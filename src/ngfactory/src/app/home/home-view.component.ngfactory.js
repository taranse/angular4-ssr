/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../../app/home/home-view.component';
import * as import3 from '../../../../modules/transfer-http/transfer-http';
var styles_HomeView = [];
export var RenderType_HomeView = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_HomeView,
    data: {}
});
export function View_HomeView_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 2, 'h3', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        import0.ɵpid(65536, import1.AsyncPipe, [import0.ChangeDetectorRef])
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = import0.ɵunv(v, 1, 0, import0.ɵnov(v, 2).transform(co.subs));
        ck(v, 1, 0, currVal_0);
    });
}
function View_HomeView_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'home-view', [], null, null, null, View_HomeView_0, RenderType_HomeView)),
        import0.ɵdid(57344, null, 0, import2.HomeView, [import3.TransferHttp], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var HomeViewNgFactory = import0.ɵccf('home-view', import2.HomeView, View_HomeView_Host_0, {}, {}, []);