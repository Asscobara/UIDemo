import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let DonutComponent = class DonutComponent {
    constructor() {
        this.value = 65;
        this.secondValue = 65;
        this.title = "test123";
        this.valueColor = "#53EC62";
        this.dunatColor = "#FF1647";
        this.valueTitle = "V1";
        this.secondValueTitle = "V2";
        this.data = [{
                title: 'a1',
                color: this.valueColor,
            }, {
                title: 'a2',
                color: this.dunatColor
            }];
        this._total = 0;
    }
    ngOnChanges(changes) {
        this.items = [{
                name: this.valueTitle,
                count: +this.value,
                color: this.valueColor
            }, {
                name: this.secondValueTitle,
                count: +this.secondValue,
                color: this.dunatColor
            }];
        this._total = this.items.map(a => a.count).reduce((x, y) => x + y);
    }
    getPerimeter(radius) {
        return Math.PI * 2 * radius;
    }
    getColor(index) {
        return this.items[index].color;
    }
    getOffset(radius, index) {
        var percent = 0;
        for (var i = 0; i < index; i++) {
            percent += ((this.items[i].count) / this._total);
        }
        var perimeter = Math.PI * 2 * radius;
        return perimeter * percent;
    }
    lagendItems() {
        return this.items.map(i => {
            return {
                title: i.name,
                value: i.count,
                valueColor: i.color
            };
        });
    }
};
__decorate([
    Input()
], DonutComponent.prototype, "value", void 0);
__decorate([
    Input()
], DonutComponent.prototype, "secondValue", void 0);
__decorate([
    Input()
], DonutComponent.prototype, "title", void 0);
__decorate([
    Input()
], DonutComponent.prototype, "valueColor", void 0);
__decorate([
    Input()
], DonutComponent.prototype, "dunatColor", void 0);
__decorate([
    Input()
], DonutComponent.prototype, "valueTitle", void 0);
__decorate([
    Input()
], DonutComponent.prototype, "secondValueTitle", void 0);
DonutComponent = __decorate([
    Component({
        selector: 'app-donut',
        templateUrl: './donut.component.html',
        styleUrls: ['./donut.component.css']
    })
], DonutComponent);
export { DonutComponent };
//# sourceMappingURL=donut.component.js.map