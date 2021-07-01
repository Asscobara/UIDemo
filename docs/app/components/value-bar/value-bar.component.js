import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let ValueBarComponent = class ValueBarComponent {
    constructor() {
        this.value = 33;
        this.title = 'title';
        this.maxValue = 47;
        this.maxValueHeight = 164;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        const valuePrecentage = this.value / this.maxValue;
        const height = this.maxValueHeight * valuePrecentage;
        this.opacity = valuePrecentage;
        this.height = `${height}px`;
    }
    lagendItems() {
        return [{ title: this.title, value: this.value, valueColor: '#244583' }];
    }
};
__decorate([
    Input()
], ValueBarComponent.prototype, "value", void 0);
__decorate([
    Input()
], ValueBarComponent.prototype, "title", void 0);
ValueBarComponent = __decorate([
    Component({
        selector: 'app-value-bar',
        templateUrl: './value-bar.component.html',
        styleUrls: ['./value-bar.component.css']
    })
], ValueBarComponent);
export { ValueBarComponent };
//# sourceMappingURL=value-bar.component.js.map