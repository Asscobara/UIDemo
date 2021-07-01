import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let LegendComponent = class LegendComponent {
    constructor() {
        this.gridColumns = "1fr";
    }
    ngOnChanges(changes) {
        this.gridColumns = "";
        this.items.forEach(i => this.gridColumns = `${this.gridColumns} 1fr`);
    }
};
__decorate([
    Input()
], LegendComponent.prototype, "items", void 0);
LegendComponent = __decorate([
    Component({
        selector: 'app-legend',
        templateUrl: './legend.component.html',
        styleUrls: ['./legend.component.css']
    })
], LegendComponent);
export { LegendComponent };
//# sourceMappingURL=legend.component.js.map