import { Component } from '@angular/core';
//import { Banners } from './banners';
var BannersComponent = (function () {
    function BannersComponent() {
        //TODO interface banners
        this.banners = {
            row: [
                { img: '/src/assets/img/banner-big-1.jpg', width: 100 },
                { img: './src/assets/img/banner-small-1.jpg', width: 33 },
                { img: './src/assets/img/banner-small-2.jpg', width: 33 },
                { img: './src/assets/img/banner-small-3.jpg', width: 33 }
            ],
            column: {
                big: [
                    { img: './src/assets/img/banner-medium-1.jpg', width: 66 }
                ],
                small: [
                    { img: './src/assets/img/banner-small-4.jpg', width: 100 },
                    { img: './src/assets/img/banner-small-5.jpg', width: 100 }
                ]
            }
        };
        this.bannersRow = Object.keys(this.banners);
    }
    BannersComponent.prototype.ngOnInit = function () {
    };
    return BannersComponent;
}());
export { BannersComponent };
BannersComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-banners',
                templateUrl: './banners.component.html',
                styleUrls: ['./banners.component.scss']
            },] },
];
/** @nocollapse */
BannersComponent.ctorParameters = function () { return []; };
