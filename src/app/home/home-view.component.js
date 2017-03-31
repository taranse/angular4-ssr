import { Component } from '@angular/core';
import { TransferHttp } from '../../modules/transfer-http/transfer-http';
var HomeView = (function () {
    function HomeView(http) {
        this.http = http;
    }
    HomeView.prototype.ngOnInit = function () {
        this.subs = this.http.get('http://localhost:8000/data').map(function (data) {
            return data.greeting + " " + data.name;
        });
    };
    return HomeView;
}());
export { HomeView };
HomeView.decorators = [
    { type: Component, args: [{
                selector: 'home-view',
                template: "<h3>{{subs | async}}</h3>"
            },] },
];
/** @nocollapse */
HomeView.ctorParameters = function () { return [
    { type: TransferHttp, },
]; };
