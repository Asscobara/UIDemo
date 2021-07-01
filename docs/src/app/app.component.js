import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'highpper-ui';
        this.donutValue = 5;
        this.secondDounatValue = 33;
        this.valueBarValue = 12;
        this.ticketValue = 11;
    }
    ngOnInit() {
        document.getElementById('file').onchange = (data) => {
            console.log('change', data);
        };
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map