import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let TicketComponent = class TicketComponent {
    constructor() {
        this.title = "Souce";
        this.icon = "";
        this.value = 17;
        this.valueDescription = "1.5 kg";
        this.exprationDate = new Date();
        this.minValueMargineTop = -336;
        this.maxValueHeight = 341;
        this.colors = [
            { value: 15, color: "#FF1647" },
            { value: 50, color: "#FF922D" },
            { value: 100, color: "#4686FF" }
        ];
    }
    get valueColor() {
        for (let i = 0; i < this.colors.length; i++) {
            if (this.value < this.colors[i].value) {
                return this.colors[i].color;
            }
        }
        return "#4686FF";
    }
    ngOnInit() {
        this.ngOnChanges(null);
    }
    ngOnChanges(changes) {
        const height = this.maxValueHeight * (this.value / 100);
        this.valueHeight = `${height}px`;
        const diffFromMaxHeight = this.maxValueHeight - height;
        this.valueMargineTop = `${(this.minValueMargineTop + diffFromMaxHeight)}px`;
    }
};
__decorate([
    Input()
], TicketComponent.prototype, "title", void 0);
__decorate([
    Input()
], TicketComponent.prototype, "icon", void 0);
__decorate([
    Input()
], TicketComponent.prototype, "value", void 0);
__decorate([
    Input()
], TicketComponent.prototype, "valueDescription", void 0);
__decorate([
    Input()
], TicketComponent.prototype, "exprationDate", void 0);
TicketComponent = __decorate([
    Component({
        selector: 'app-ticket',
        templateUrl: './ticket.component.html',
        styleUrls: ['./ticket.component.css']
    })
], TicketComponent);
export { TicketComponent };
//# sourceMappingURL=ticket.component.js.map