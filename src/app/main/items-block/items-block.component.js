import { Component, Input } from '@angular/core';
var ItemsBlockComponent = (function () {
    function ItemsBlockComponent() {
    }
    ItemsBlockComponent.prototype.ngOnInit = function () {
    };
    return ItemsBlockComponent;
}());
export { ItemsBlockComponent };
ItemsBlockComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-items-block',
                templateUrl: './items-block.component.html',
                styleUrls: ['./items-block.component.scss']
            },] },
];
/** @nocollapse */
ItemsBlockComponent.ctorParameters = function () { return []; };
ItemsBlockComponent.propDecorators = {
    'id': [{ type: Input },],
};
