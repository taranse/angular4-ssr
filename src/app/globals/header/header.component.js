import { Component, ViewChild } from '@angular/core';
var HeaderComponent = (function () {
    function HeaderComponent() {
        this.phones = {
            allPhones: ['8 800 553 55 55', '+7 (495) 517 77 34'],
            main: '8 800 553 55 55',
            operator: '+7 (495) 517 77 34'
        };
        this.navigateTop = [
            {
                name: 'О компании',
                selectorClass: 'black-text',
                link: {
                    alias: 'about'
                }
            },
            {
                name: 'Доставка/Оплата',
                selectorClass: 'black-text',
                link: {
                    alias: 'lazy',
                    option: {
                        category: 'lustri',
                        f1: 'vileberries'
                    }
                }
            },
            {
                name: 'Распродажа',
                selectorClass: 'green-text',
                link: {
                    alias: '/#main',
                    option: {
                        category: 'lustri',
                        f1: 'maytoni'
                    }
                }
            },
            {
                name: 'Блог',
                selectorClass: 'black-text',
                link: {
                    alias: 'about',
                    option: {
                        category: 'lustri'
                    }
                }
            },
            {
                name: 'Контакты',
                selectorClass: 'black-text',
                link: {
                    alias: '',
                    option: {}
                }
            }
        ];
    }
    HeaderComponent.prototype.sidenavOpen = function () {
        this.sidenav.sidenavOpen();
    };
    HeaderComponent.prototype.CliclActive = function () { };
    return HeaderComponent;
}());
export { HeaderComponent };
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            },] },
];
/** @nocollapse */
HeaderComponent.ctorParameters = function () { return []; };
HeaderComponent.propDecorators = {
    'sidenav': [{ type: ViewChild, args: ['sidenav',] },],
};
