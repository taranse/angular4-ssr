import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TransferState } from '../transfer-state/transfer-state';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/fromPromise';
var TransferHttp = (function () {
    function TransferHttp(http, transferState) {
        this.http = http;
        this.transferState = transferState;
    }
    TransferHttp.prototype.request = function (uri, options) {
        var _this = this;
        return this.getData(uri, options, function (url, options) {
            return _this.http.request(url, options);
        });
    };
    /**
     * Performs a request with `get` http method.
     */
    TransferHttp.prototype.get = function (url, options) {
        var _this = this;
        return this.getData(url, options, function (url, options) {
            return _this.http.get(url, options);
        });
    };
    /**
     * Performs a request with `post` http method.
     */
    TransferHttp.prototype.post = function (url, body, options) {
        var _this = this;
        return this.getPostData(url, body, options, function (url, options) {
            return _this.http.post(url, body.options);
        });
    };
    /**
     * Performs a request with `put` http method.
     */
    TransferHttp.prototype.put = function (url, body, options) {
        var _this = this;
        return this.getData(url, options, function (url, options) {
            return _this.http.put(url, options);
        });
    };
    /**
     * Performs a request with `delete` http method.
     */
    TransferHttp.prototype.delete = function (url, options) {
        var _this = this;
        return this.getData(url, options, function (url, options) {
            return _this.http.delete(url, options);
        });
    };
    /**
     * Performs a request with `patch` http method.
     */
    TransferHttp.prototype.patch = function (url, body, options) {
        var _this = this;
        return this.getPostData(url, body, options, function (url, options) {
            return _this.http.patch(url, body.options);
        });
    };
    /**
     * Performs a request with `head` http method.
     */
    TransferHttp.prototype.head = function (url, options) {
        var _this = this;
        return this.getData(url, options, function (url, options) {
            return _this.http.head(url, options);
        });
    };
    /**
     * Performs a request with `options` http method.
     */
    TransferHttp.prototype.options = function (url, options) {
        var _this = this;
        return this.getData(url, options, function (url, options) {
            return _this.http.options(url, options);
        });
    };
    TransferHttp.prototype.getData = function (uri, options, callback) {
        var _this = this;
        var url = uri;
        if (typeof uri !== 'string') {
            url = uri.url;
        }
        var key = url + JSON.stringify(options);
        try {
            return this.resolveData(key);
        }
        catch (e) {
            return callback(uri, options)
                .map(function (res) { return res.json(); })
                .do(function (data) {
                _this.setCache(key, data);
            });
        }
    };
    TransferHttp.prototype.getPostData = function (uri, body, options, callback) {
        var _this = this;
        var url = uri;
        if (typeof uri !== 'string') {
            url = uri.url;
        }
        var key = url + JSON.stringify(body) + JSON.stringify(options);
        try {
            return this.resolveData(key);
        }
        catch (e) {
            return callback(uri, body, options)
                .map(function (res) { return res.json(); })
                .do(function (data) {
                _this.setCache(key, data);
            });
        }
    };
    TransferHttp.prototype.resolveData = function (key) {
        var data = this.getFromCache(key);
        if (!data) {
            throw new Error();
        }
        return Observable.fromPromise(Promise.resolve(data));
    };
    TransferHttp.prototype.setCache = function (key, data) {
        return this.transferState.set(key, data);
    };
    TransferHttp.prototype.getFromCache = function (key) {
        return this.transferState.get(key);
    };
    return TransferHttp;
}());
export { TransferHttp };
TransferHttp.decorators = [
    { type: Injectable },
];
/** @nocollapse */
TransferHttp.ctorParameters = function () { return [
    { type: Http, },
    { type: TransferState, },
]; };
