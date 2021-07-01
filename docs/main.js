(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+8ec":
/*!*****************************************************!*\
  !*** ./src/app/components/donut/donut.component.ts ***!
  \*****************************************************/
/*! exports provided: DonutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonutComponent", function() { return DonutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _legend_legend_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../legend/legend.component */ "Z0OH");




function DonutComponent__svg_circle_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 5);
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stroke-dasharray", ctx_r0.getPerimeter(50))("stroke-dashoffset", ctx_r0.getOffset(50, i_r2))("stroke", ctx_r0.getColor(i_r2));
} }
class DonutComponent {
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
}
DonutComponent.ɵfac = function DonutComponent_Factory(t) { return new (t || DonutComponent)(); };
DonutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DonutComponent, selectors: [["app-donut"]], inputs: { value: "value", secondValue: "secondValue", title: "title", valueColor: "valueColor", dunatColor: "dunatColor", valueTitle: "valueTitle", secondValueTitle: "secondValueTitle" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 3, consts: [[1, "donut-main-container"], [1, "donut-content"], ["height", "85%", "width", "85%", "viewBox", "0 0 120 120"], ["cx", "60", "cy", "60", "r", "50", "fill", "transparent", "stroke-width", "20", 4, "ngFor", "ngForOf"], [3, "items"], ["cx", "60", "cy", "60", "r", "50", "fill", "transparent", "stroke-width", "20"]], template: function DonutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DonutComponent__svg_circle_4_Template, 1, 3, "circle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-legend", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.lagendItems());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _legend_legend_component__WEBPACK_IMPORTED_MODULE_2__["LegendComponent"]], styles: [".donut-main-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n    width: 204px;\n    height: 204px;\n    background: #FFFFFF;\n    box-shadow: inset 0px 0px 29px rgba(196, 196, 196, 0.5);\n    border-radius: 141px;\n    text-align: -webkit-center;\n}\n\n.donut-content[_ngcontent-%COMP%] {\n    grid-row: 1;\n    grid-column: 1;\n    align-self: center;\n    width: 102px;\n    height: 102px;\n    left: 111px;\n    top: 133px;\n    line-height: 70px;\n    background: #FFFFFF;\n    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.1);\n    border-radius: 141px;\n    margin-left: 51px;\n    margin-top: 7px;\n}\n\nsvg[_ngcontent-%COMP%] {\n    grid-row: 1;\n    grid-column: 1;\n   transform: rotate(-90deg);    \n    margin-top: 17px;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb251dC9kb251dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdURBQXVEO0lBQ3ZELG9CQUFvQjtJQUNwQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFDM0Msb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7R0FFZCx5QkFBeUI7SUFDekIsZ0JBQWdCOztBQUVwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9udXQvZG9udXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb251dC1tYWluLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICB3aWR0aDogMjA0cHg7XG4gICAgaGVpZ2h0OiAyMDRweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMjlweCByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTQxcHg7XG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG59XG5cbi5kb251dC1jb250ZW50IHtcbiAgICBncmlkLXJvdzogMTtcbiAgICBncmlkLWNvbHVtbjogMTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMnB4O1xuICAgIGhlaWdodDogMTAycHg7XG4gICAgbGVmdDogMTExcHg7XG4gICAgdG9wOiAxMzNweDtcbiAgICBsaW5lLWhlaWdodDogNzBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTQxcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUxcHg7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xufVxuXG5zdmcge1xuICAgIGdyaWQtcm93OiAxO1xuICAgIGdyaWQtY29sdW1uOiAxO1xuICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7ICAgIFxuICAgIG1hcmdpbi10b3A6IDE3cHg7XG5cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DonutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-donut',
                templateUrl: './donut.component.html',
                styleUrls: ['./donut.component.css']
            }]
    }], function () { return []; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], secondValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valueColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dunatColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valueTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], secondValueTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hagaylevy/personal/highpper-ui/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "D8Zv":
/*!***************************************************************!*\
  !*** ./src/app/components/main-shell/main-shell.component.ts ***!
  \***************************************************************/
/*! exports provided: MainShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainShellComponent", function() { return MainShellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["*"];
class MainShellComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainShellComponent.ɵfac = function MainShellComponent_Factory(t) { return new (t || MainShellComponent)(); };
MainShellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainShellComponent, selectors: [["app-main-shell"]], ngContentSelectors: _c0, decls: 4, vars: 0, consts: [[1, "main-shell-container"], [1, "shell-top-bar-container"]], template: function MainShellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " top bar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main-shell-container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;    \n    background: #EDF0F4;\n}\n\n.shell-top-bar-container[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 1920px;\n    height: 60px;\n    left: 0px;\n    top: 0px;\n\n    background: #FFFFFF;\n    \n    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.1);\n}\n\n.shell-side-bar-container[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 200px;\n    height: 1020px;\n    left: 0px;\n    top: 60px;\n    \n    background: #FFFFFF;\n    \n    \n    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXNoZWxsL21haW4tc2hlbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFROztJQUVSLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjO0lBQ2QsU0FBUztJQUNULFNBQVM7O0lBRVQsbUJBQW1CO0lBQ25CLGdCQUFnQjs7SUFFaEIsMkNBQTJDO0FBQy9DIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluLXNoZWxsL21haW4tc2hlbGwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1haW4tc2hlbGwtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7ICAgIFxuICAgIGJhY2tncm91bmQ6ICNFREYwRjQ7XG59XG5cbi5zaGVsbC10b3AtYmFyLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxOTIwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDBweDtcblxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgLyogRHJvcCBTaGFkb3cgKi9cbiAgICBib3gtc2hhZG93OiAycHggMnB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uc2hlbGwtc2lkZS1iYXItY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMTAyMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDYwcHg7XG4gICAgXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAvKiBEcm9wIFNoYWRvdyAqL1xuICAgIFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainShellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-shell',
                templateUrl: './main-shell.component.html',
                styleUrls: ['./main-shell.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "PlmD":
/*!*************************************************************!*\
  !*** ./src/app/components/value-bar/value-bar.component.ts ***!
  \*************************************************************/
/*! exports provided: ValueBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueBarComponent", function() { return ValueBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _legend_legend_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../legend/legend.component */ "Z0OH");



class ValueBarComponent {
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
}
ValueBarComponent.ɵfac = function ValueBarComponent_Factory(t) { return new (t || ValueBarComponent)(); };
ValueBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ValueBarComponent, selectors: [["app-value-bar"]], inputs: { value: "value", title: "title" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 5, consts: [[1, "bar-container"], [1, "bar-value"], [1, "bar-legend", 3, "items"]], template: function ValueBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-legend", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.height)("opacity", ctx.opacity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.lagendItems());
    } }, directives: [_legend_legend_component__WEBPACK_IMPORTED_MODULE_1__["LegendComponent"]], styles: [".bar-container[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: baseline;\n    width: 60px;\n    height: 180px;\n    background: #FFFFFF;\n    box-shadow: inset 0px 0px 29px rgba(196, 196, 196, 0.5);\n    border-radius: 10px;\n    margin-left: 70px;\n}\n\n.bar-value[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 164px;\n    background: #4686FF;\n    opacity: 1;\n    border-radius: 7px;\n    align-self: flex-end;\n    margin-block-end: 7px;\n    margin-inline-start: 9px;\n}\n\n.bar-legend[_ngcontent-%COMP%] {\n    margin-left: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92YWx1ZS1iYXIvdmFsdWUtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVEQUF1RDtJQUN2RCxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmFsdWUtYmFyL3ZhbHVlLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogMTgwcHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDI5cHggcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XG59XG5cbi5iYXItdmFsdWUge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogMTY0cHg7XG4gICAgYmFja2dyb3VuZDogIzQ2ODZGRjtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiA3cHg7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogOXB4O1xufVxuXG4uYmFyLWxlZ2VuZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValueBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-value-bar',
                templateUrl: './value-bar.component.html',
                styleUrls: ['./value-bar.component.css']
            }]
    }], function () { return []; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_main_shell_main_shell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main-shell/main-shell.component */ "D8Zv");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/card/card.component */ "lXt9");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_donut_donut_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/donut/donut.component */ "+8ec");
/* harmony import */ var _components_value_bar_value_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/value-bar/value-bar.component */ "PlmD");
/* harmony import */ var _components_ticket_ticket_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ticket/ticket.component */ "jvX9");








class AppComponent {
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
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 27, vars: 12, consts: [[1, "flex", 2, "padding", "4px"], [1, "card", 3, "title"], ["type", "number", 3, "ngModel", "ngModelChange"], [3, "value", "secondValue"], [1, "flex"], [3, "value"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-main-shell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Playground");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dounat Value 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_7_listener($event) { return ctx.donutValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dounat Value 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_11_listener($event) { return ctx.secondDounatValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ValueBar Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_15_listener($event) { return ctx.valueBarValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Ticket Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_19_listener($event) { return ctx.ticketValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-donut", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "app-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-value-bar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "app-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-ticket", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Control");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.donutValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.secondDounatValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.valueBarValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ticketValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Dounat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.donutValue)("secondValue", ctx.secondDounatValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Value bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.valueBarValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Ticket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.ticketValue);
    } }, directives: [_components_main_shell_main_shell_component__WEBPACK_IMPORTED_MODULE_1__["MainShellComponent"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _components_donut_donut_component__WEBPACK_IMPORTED_MODULE_4__["DonutComponent"], _components_value_bar_value_bar_component__WEBPACK_IMPORTED_MODULE_5__["ValueBarComponent"], _components_ticket_ticket_component__WEBPACK_IMPORTED_MODULE_6__["TicketComponent"]], styles: [".card[_ngcontent-%COMP%] {\n    padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gICAgcGFkZGluZzogMTVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "Z0OH":
/*!*******************************************************!*\
  !*** ./src/app/components/legend/legend.component.ts ***!
  \*******************************************************/
/*! exports provided: LegendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegendComponent", function() { return LegendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function LegendComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.title);
} }
const _c0 = function (a0) { return { "color": a0 }; };
function LegendComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r3.valueColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.value);
} }
const _c1 = function (a0) { return { "grid-template-columns": a0 }; };
class LegendComponent {
    constructor() {
        this.gridColumns = "1fr";
    }
    ngOnChanges(changes) {
        this.gridColumns = "";
        this.items.forEach(i => this.gridColumns = `${this.gridColumns} 1fr`);
    }
}
LegendComponent.ɵfac = function LegendComponent_Factory(t) { return new (t || LegendComponent)(); };
LegendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LegendComponent, selectors: [["app-legend"]], inputs: { items: "items" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 5, consts: [[1, "lagend-container", 3, "ngStyle"], ["class", "lagend-title", 4, "ngFor", "ngForOf"], ["class", "lagend-value", 4, "ngFor", "ngForOf"], [1, "lagend-title"], [1, "lagend-value"], [3, "ngStyle"]], template: function LegendComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LegendComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LegendComponent_div_2_Template, 3, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx.gridColumns));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".lagend-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    width: 300px;\n    margin-left: -50px;\n  }\n  \n  .lagend-value[_ngcontent-%COMP%] {\n    font-family: Exo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 48px;\n    line-height: 64px;  \n    text-align: center;\n  }\n  \n  .lagend-title[_ngcontent-%COMP%] {\n    font-family: Exo;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 20px;\n    line-height: 27px;\n    display: flex;\n    align-items: center;\n    text-align: center;\n    justify-content: center;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sZWdlbmQvbGVnZW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix1QkFBdUI7RUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xlZ2VuZC9sZWdlbmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmxhZ2VuZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xuICB9XG4gIFxuICAubGFnZW5kLXZhbHVlIHtcbiAgICBmb250LWZhbWlseTogRXhvO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDY0cHg7ICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5sYWdlbmQtdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBFeG87XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LegendComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-legend',
                templateUrl: './legend.component.html',
                styleUrls: ['./legend.component.css']
            }]
    }], function () { return []; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/card/card.component */ "lXt9");
/* harmony import */ var _components_donut_donut_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/donut/donut.component */ "+8ec");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_value_bar_value_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/value-bar/value-bar.component */ "PlmD");
/* harmony import */ var _components_legend_legend_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/legend/legend.component */ "Z0OH");
/* harmony import */ var _components_ticket_ticket_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ticket/ticket.component */ "jvX9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_main_shell_main_shell_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/main-shell/main-shell.component */ "D8Zv");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"],
        _components_donut_donut_component__WEBPACK_IMPORTED_MODULE_5__["DonutComponent"],
        _components_value_bar_value_bar_component__WEBPACK_IMPORTED_MODULE_7__["ValueBarComponent"],
        _components_legend_legend_component__WEBPACK_IMPORTED_MODULE_8__["LegendComponent"],
        _components_ticket_ticket_component__WEBPACK_IMPORTED_MODULE_9__["TicketComponent"],
        _components_main_shell_main_shell_component__WEBPACK_IMPORTED_MODULE_11__["MainShellComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"],
                    _components_donut_donut_component__WEBPACK_IMPORTED_MODULE_5__["DonutComponent"],
                    _components_value_bar_value_bar_component__WEBPACK_IMPORTED_MODULE_7__["ValueBarComponent"],
                    _components_legend_legend_component__WEBPACK_IMPORTED_MODULE_8__["LegendComponent"],
                    _components_ticket_ticket_component__WEBPACK_IMPORTED_MODULE_9__["TicketComponent"],
                    _components_main_shell_main_shell_component__WEBPACK_IMPORTED_MODULE_11__["MainShellComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"],
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "jvX9":
/*!*******************************************************!*\
  !*** ./src/app/components/ticket/ticket.component.ts ***!
  \*******************************************************/
/*! exports provided: TicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketComponent", function() { return TicketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class TicketComponent {
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
}
TicketComponent.ɵfac = function TicketComponent_Factory(t) { return new (t || TicketComponent)(); };
TicketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TicketComponent, selectors: [["app-ticket"]], inputs: { title: "title", icon: "icon", value: "value", valueDescription: "valueDescription", exprationDate: "exprationDate" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 16, vars: 13, consts: [[1, "ticket-container"], [1, "ticket-icon-background"], ["src", "../../../assets/images/sauce.png", 1, "icon"], [1, "ticket-title"], [1, "ticket-value"], [1, "ticket-value-description"], [1, "ticket-experation-date"], [1, "ticket-background-value"]], template: function TicketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Expired");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.valueColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.value, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.valueDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 10, ctx.exprationDate, "short"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.valueHeight)("margin-top", ctx.valueMargineTop);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".ticket-container[_ngcontent-%COMP%] {\n    width: 180px;\n    height: 340px;\n    left: 0px;\n    top: 0px;\n    background: #FFFFFF;    \n    border-radius: 10px;    \n    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.1);\n}\n\n.ticket-title[_ngcontent-%COMP%] {\n    height: 40px;\n    margin-top: 12px;\n    font-family: Exo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 30px;\n    line-height: 40px;\n    text-align: center;\n    color: #444444;\n}\n\n.ticket-value[_ngcontent-%COMP%] {\n    height: 54px;\n    font-family: Exo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 40px;\n    line-height: 53px;\n    text-align: center;\n}\n\n.ticket-value-description[_ngcontent-%COMP%] {\n    margin-top: -10px;\n    height: 27px;\n    font-family: Exo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 20px;\n    line-height: 27px;\n    text-align: center;\n    color: #444444;\n}\n\n.ticket-experation-date[_ngcontent-%COMP%] {\n    font-family: Exo;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 21px;\n    text-align: center;\n    color: #444444;    \n    margin-top: 50px;\n}\n\n.ticket-background-value[_ngcontent-%COMP%] {\n    width: 180px;\n    height: 76px;\n    left: 0px;\n    top: 314px;\n    background: #E1E4E9;\n    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;  \n}\n\n.ticket-icon-background[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    display: inline-block;\n    width: 100px;\n    height: 100px;\n    margin-left: 40px;\n    background: #FFFFFF;\n    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.1);\n    border-radius: 88px;\n}\n\n.icon[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aWNrZXQvdGlja2V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFNBQVM7SUFDVCxRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFDM0MsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsMkNBQTJDO0lBQzNDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RpY2tldC90aWNrZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aWNrZXQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgaGVpZ2h0OiAzNDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAwcHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjsgICAgXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgICAgXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnRpY2tldC10aXRsZSB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgZm9udC1mYW1pbHk6IEV4bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzQ0NDQ0NDtcbn1cblxuLnRpY2tldC12YWx1ZSB7XG4gICAgaGVpZ2h0OiA1NHB4O1xuICAgIGZvbnQtZmFtaWx5OiBFeG87XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBsaW5lLWhlaWdodDogNTNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aWNrZXQtdmFsdWUtZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIGhlaWdodDogMjdweDtcbiAgICBmb250LWZhbWlseTogRXhvO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNDQ0NDQ0O1xufVxuXG4udGlja2V0LWV4cGVyYXRpb24tZGF0ZSB7XG4gICAgZm9udC1mYW1pbHk6IEV4bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNDQ0NDQ0OyAgICBcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4udGlja2V0LWJhY2tncm91bmQtdmFsdWUge1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDc2cHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHRvcDogMzE0cHg7XG4gICAgYmFja2dyb3VuZDogI0UxRTRFOTtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICBcbn1cblxuLnRpY2tldC1pY29uLWJhY2tncm91bmQge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA4OHB4O1xufVxuXG4uaWNvbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ticket',
                templateUrl: './ticket.component.html',
                styleUrls: ['./ticket.component.css']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valueDescription: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], exprationDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "lXt9":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["*"];
class CardComponent {
    constructor() {
        this.title = 'Performance';
    }
    ngOnInit() {
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { title: "title" }, ngContentSelectors: _c0, decls: 7, vars: 1, consts: [[1, "card-container"], [1, "flex"], [1, "card-title-border"], [1, "card-title"], [1, "card-content"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, styles: [".card-container[_ngcontent-%COMP%] {\n    width: 324px;\n    height: 428px;\n    background: #FFFFFF;\n    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n    padding: 20px;\n}\n\n.card-size[_ngcontent-%COMP%] {\n    width: 324px;\n    height: 428px;\n}\n\n.card-title[_ngcontent-%COMP%] {\n    width: 131px;\n    height: 32px;\n    left: 603px;\n    top: 110px;\n    font-family: Exo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 24px;\n    line-height: 32px;\n    letter-spacing: -0.5px;\n    color: #244583;\n    margin-left: 5px;\n    margin-top: 30px;\n}\n\n.card-title-border[_ngcontent-%COMP%] {\n    width: 4px;\n    height: 32px;\n    left: 589px;\n    top: 110px;\n    background: #FFA959;\n    border-radius: 2px;\n    margin-left: 30px;\n    margin-top: 30px;\n}\n\n.card-content[_ngcontent-%COMP%] {\n    margin-top: 17px;\n    margin-left: 60px;\n    margin-right: 60px;\n    margin-bottom: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJDQUEyQztJQUMzQyxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jb250YWluZXIge1xuICAgIHdpZHRoOiAzMjRweDtcbiAgICBoZWlnaHQ6IDQyOHB4O1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5jYXJkLXNpemUge1xuICAgIHdpZHRoOiAzMjRweDtcbiAgICBoZWlnaHQ6IDQyOHB4O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gICAgd2lkdGg6IDEzMXB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBsZWZ0OiA2MDNweDtcbiAgICB0b3A6IDExMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBFeG87XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICAgIGNvbG9yOiAjMjQ0NTgzO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmNhcmQtdGl0bGUtYm9yZGVyIHtcbiAgICB3aWR0aDogNHB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBsZWZ0OiA1ODlweDtcbiAgICB0b3A6IDExMHB4O1xuICAgIGJhY2tncm91bmQ6ICNGRkE5NTk7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5jYXJkLWNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDE3cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.css']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map