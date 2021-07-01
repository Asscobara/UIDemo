import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let CardComponent = class CardComponent {
    constructor() {
        this.title = 'Performance';
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], CardComponent.prototype, "title", void 0);
CardComponent = __decorate([
    Component({
        selector: 'app-card',
        templateUrl: './card.component.html',
        styleUrls: ['./card.component.css']
    })
], CardComponent);
export { CardComponent };
//# sourceMappingURL=card.component.js.map