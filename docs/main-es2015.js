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




function DonutComponent__svg_circle_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 7);
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stroke-dasharray", ctx_r0.getPerimeter(50))("stroke-dashoffset", ctx_r0.getOffset(50, i_r2))("stroke", ctx_r0.getColor(i_r2));
} }
class DonutComponent {
    constructor() {
        this.value = 65;
        this.secondValue = 65;
        this.title = 'test123';
        this.subTitle = 'sub';
        this.valueColor = '#53EC62';
        this.dunatColor = '#FF1647';
        this.valueTitle = 'V1';
        this.secondValueTitle = 'V2';
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
DonutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DonutComponent, selectors: [["app-donut"]], inputs: { value: "value", secondValue: "secondValue", title: "title", subTitle: "subTitle", valueColor: "valueColor", dunatColor: "dunatColor", valueTitle: "valueTitle", secondValueTitle: "secondValueTitle" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 9, vars: 4, consts: [[1, "donut-main-container"], [1, "donut-content"], [1, "titles-text", "title"], [1, "titles-text", "sub-title"], ["height", "85%", "width", "85%", "viewBox", "0 0 120 120"], ["cx", "60", "cy", "60", "r", "50", "fill", "transparent", "stroke-width", "20", 4, "ngFor", "ngForOf"], [3, "items"], ["cx", "60", "cy", "60", "r", "50", "fill", "transparent", "stroke-width", "20"]], template: function DonutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DonutComponent__svg_circle_7_Template, 1, 3, "circle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-legend", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.lagendItems());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _legend_legend_component__WEBPACK_IMPORTED_MODULE_2__["LegendComponent"]], styles: [".donut-main-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n    width: 204px;\n    height: 204px;\n    background: #FFFFFF;\n    box-shadow: inset 0px 0px 29px rgba(196, 196, 196, 0.5);\n    border-radius: 141px;\n    text-align: -webkit-center;\n}\n\n.donut-content[_ngcontent-%COMP%] {\n    grid-row: 1;\n    grid-column: 1;\n    align-self: center;\n    width: 102px;\n    height: 102px;\n    left: 111px;\n    top: 133px;\n    line-height: 70px;\n    background: #FFFFFF;\n    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.1);\n    border-radius: 141px;\n    margin-left: 51px;\n    margin-top: 7px;\n}\n\nsvg[_ngcontent-%COMP%] {\n    grid-row: 1;\n    grid-column: 1;\n   transform: rotate(-90deg);    \n    margin-top: 17px;\n}\n\n.titles-text[_ngcontent-%COMP%] {\n    font-family: Exo;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 21px;\n    display: flex;\n    align-items: center;\n    text-align: center;\n    color: #444444;\n    justify-content: center;\n}\n\n.title[_ngcontent-%COMP%] {\n    margin-top: 24px;\n}\n\n.sub-title[_ngcontent-%COMP%] {\n    margin-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb251dC9kb251dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdURBQXVEO0lBQ3ZELG9CQUFvQjtJQUNwQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFDM0Msb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7R0FFZCx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9udXQvZG9udXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb251dC1tYWluLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICB3aWR0aDogMjA0cHg7XG4gICAgaGVpZ2h0OiAyMDRweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMjlweCByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTQxcHg7XG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG59XG5cbi5kb251dC1jb250ZW50IHtcbiAgICBncmlkLXJvdzogMTtcbiAgICBncmlkLWNvbHVtbjogMTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMnB4O1xuICAgIGhlaWdodDogMTAycHg7XG4gICAgbGVmdDogMTExcHg7XG4gICAgdG9wOiAxMzNweDtcbiAgICBsaW5lLWhlaWdodDogNzBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTQxcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUxcHg7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xufVxuXG5zdmcge1xuICAgIGdyaWQtcm93OiAxO1xuICAgIGdyaWQtY29sdW1uOiAxO1xuICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7ICAgIFxuICAgIG1hcmdpbi10b3A6IDE3cHg7XG59XG5cbi50aXRsZXMtdGV4dCB7XG4gICAgZm9udC1mYW1pbHk6IEV4bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzQ0NDQ0NDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG59ICJdfQ== */"] });
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
        }], subTitle: [{
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

/***/ "5TVV":
/*!***************************************************************!*\
  !*** ./src/app/components/production/production.component.ts ***!
  \***************************************************************/
/*! exports provided: ProductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionComponent", function() { return ProductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card/card.component */ "lXt9");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../grid/grid.component */ "m4bG");




class ProductionComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductionComponent.ɵfac = function ProductionComponent_Factory(t) { return new (t || ProductionComponent)(); };
ProductionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductionComponent, selectors: [["app-production"]], decls: 3, vars: 1, consts: [[1, "production-container"], [3, "title"]], template: function ProductionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Grid test");
    } }, directives: [_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"], _grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"]], styles: [".production-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns:  1fr 1fr;\n    grid-template-rows: auto 1fr;\n    column-gap: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0aW9uL3Byb2R1Y3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3Rpb24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogIDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcbiAgICBjb2x1bW4tZ2FwOiAyZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-production',
                templateUrl: './production.component.html',
                styleUrls: ['./production.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "5kT4":
/*!*****************************************************************!*\
  !*** ./src/app/components/camera-view/camera-view.component.ts ***!
  \*****************************************************************/
/*! exports provided: CameraViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraViewComponent", function() { return CameraViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sensors_sensor_sensor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sensors/sensor/sensor.component */ "7o9e");



const _c0 = ["videoPlayer"];
class CameraViewComponent {
    constructor() { }
    ngOnInit() {
    }
    toggleVideo() {
        this.videoplayer.nativeElement.play();
    }
}
CameraViewComponent.ɵfac = function CameraViewComponent_Factory(t) { return new (t || CameraViewComponent)(); };
CameraViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CameraViewComponent, selectors: [["app-camera-view"]], viewQuery: function CameraViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.videoplayer = _t.first);
    } }, inputs: { videoSource: "videoSource", sensor: "sensor" }, decls: 5, vars: 2, consts: [[3, "data"], ["controls", "", 1, "camera-view", 3, "click"], ["videoPlayer", ""], ["type", "video/mp4", 3, "src"]], template: function CameraViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sensor", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CameraViewComponent_Template_video_click_1_listener() { return ctx.toggleVideo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Browser not supported\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.sensor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.videoSource, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_sensors_sensor_sensor_component__WEBPACK_IMPORTED_MODULE_1__["SensorComponent"]], styles: [".camera-view[_ngcontent-%COMP%] {\n    width: 260px;\n    margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYW1lcmEtdmlldy9jYW1lcmEtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FtZXJhLXZpZXcvY2FtZXJhLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW1lcmEtdmlldyB7XG4gICAgd2lkdGg6IDI2MHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CameraViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-camera-view',
                templateUrl: './camera-view.component.html',
                styleUrls: ['./camera-view.component.css']
            }]
    }], function () { return []; }, { videoSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sensor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], videoplayer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['videoPlayer']
        }] }); })();


/***/ }),

/***/ "7o9e":
/*!***************************************************************!*\
  !*** ./src/app/components/sensors/sensor/sensor.component.ts ***!
  \***************************************************************/
/*! exports provided: SensorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensorComponent", function() { return SensorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_icons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/icons.service */ "8cn1");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-svg-icon */ "OFbc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a0) { return { "background": a0 }; };
function SensorComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.data.color));
} }
function SensorComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.data.value, " ");
} }
const _c1 = function () { return { "width.px": 16, "height.px": 16, "padding.px": 7 }; };
class SensorComponent {
    constructor(iconsService) {
        this.iconsService = iconsService;
        this.data = {
            id: 0,
            title: 'corn',
            color: '#53EC62',
            icon: 'ing_corn',
            value: null
        };
    }
    ngOnInit() {
    }
}
SensorComponent.ɵfac = function SensorComponent_Factory(t) { return new (t || SensorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_icons_service__WEBPACK_IMPORTED_MODULE_1__["IconsService"])); };
SensorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SensorComponent, selectors: [["app-sensor"]], inputs: { data: "data" }, decls: 6, vars: 6, consts: [[1, "sensor-container"], [1, "sensor-icon", 3, "name", "svgStyle"], [1, "sensor-title"], ["class", "sensor-circle", 4, "ngIf"], ["class", "sensor-value", 4, "ngIf"], [1, "sensor-circle"], [1, "sensor-inner-circle", 3, "ngStyle"], [1, "sensor-value"]], template: function SensorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "svg-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SensorComponent_div_4_Template, 2, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SensorComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.data.icon)("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.value === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.value !== null);
    } }, directives: [angular_svg_icon__WEBPACK_IMPORTED_MODULE_2__["SvgIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: [".sensor-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n}\n\n.sensor-icon[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.sensor-title[_ngcontent-%COMP%] {\n\n    font-family: Exo;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 18px;\n    line-height: 28px;\n    display: flex;\n    align-items: center;\n    color: #444444;\n\n}\n\n.sensor-circle[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    background: #FFFFFF;\n    box-shadow: inset 0px 0px 29px rgba(196, 196, 196, 0.5);\n    border-radius: 141px;\n    transform: matrix(1, 0, 0, -1, 0, 0);\n}\n\n.sensor-inner-circle[_ngcontent-%COMP%] {\n    width: 24px;    \n    height: 24px;\n    \n    border-radius: 120px;\n    margin-left: 3px;\n    margin-top: 3px;\n}\n\n.sensor-value[_ngcontent-%COMP%] {\n    font-family: Exo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 24px;\n    line-height: 32px;\n    text-align: right;\n    color: #444444;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZW5zb3JzL3NlbnNvci9zZW5zb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjOztBQUVsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVEQUF1RDtJQUN2RCxvQkFBb0I7SUFDcEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7O0lBRVosb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2Vuc29ycy9zZW5zb3Ivc2Vuc29yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Vuc29yLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XG59XG5cbi5zZW5zb3ItaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnNlbnNvci10aXRsZSB7XG5cbiAgICBmb250LWZhbWlseTogRXhvO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICM0NDQ0NDQ7XG5cbn1cblxuLnNlbnNvci1jaXJjbGUge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMjlweCByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTQxcHg7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgoMSwgMCwgMCwgLTEsIDAsIDApO1xufVxuXG4uc2Vuc29yLWlubmVyLWNpcmNsZSB7XG4gICAgd2lkdGg6IDI0cHg7ICAgIFxuICAgIGhlaWdodDogMjRweDtcbiAgICBcbiAgICBib3JkZXItcmFkaXVzOiAxMjBweDtcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xuICAgIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLnNlbnNvci12YWx1ZSB7XG4gICAgZm9udC1mYW1pbHk6IEV4bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGNvbG9yOiAjNDQ0NDQ0O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SensorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sensor',
                templateUrl: './sensor.component.html',
                styleUrls: ['./sensor.component.css']
            }]
    }], function () { return [{ type: src_app_services_icons_service__WEBPACK_IMPORTED_MODULE_1__["IconsService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "8cn1":
/*!*******************************************!*\
  !*** ./src/app/services/icons.service.ts ***!
  \*******************************************/
/*! exports provided: IconsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsService", function() { return IconsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-svg-icon */ "OFbc");



class IconsService {
    constructor(iconRegistry) {
        this.iconRegistry = iconRegistry;
        this.basePath = '../assets/images/';
        this.loadAllIcons();
    }
    loadAllIcons() {
        // #region logo
        this.iconRegistry.loadSvg(`${this.basePath}logo/logo_text.svg`, 'logo_txt').subscribe();
        this.iconRegistry.loadSvg(`${this.basePath}logo/logo_image.svg`, 'logo_img').subscribe();
        // #endregion
        // #region ingredience
        this.iconRegistry.loadSvg(`${this.basePath}ingredience/corn.svg`, 'ing_corn').subscribe();
        this.iconRegistry.loadSvg(`${this.basePath}ingredience/mashroom.svg`, 'ing_mashroom').subscribe();
        this.iconRegistry.loadSvg(`${this.basePath}ingredience/olives.svg`, 'ing_olives').subscribe();
        this.iconRegistry.loadSvg(`${this.basePath}ingredience/onion.svg`, 'ing_onion').subscribe();
        //#endregion
        // #region sensors
        this.iconRegistry.loadSvg(`${this.basePath}sensors/camera.svg`, 'sens_cam').subscribe();
        this.iconRegistry.loadSvg(`${this.basePath}sensors/cloud.svg`, 'sens_cloud').subscribe();
        this.iconRegistry.loadSvg(`${this.basePath}sensors/drop.svg`, 'sens_drop').subscribe();
        this.iconRegistry.loadSvg(`${this.basePath}sensors/electricity.svg`, 'sens_elec').subscribe();
        this.iconRegistry.loadSvg(`${this.basePath}sensors/humidity.svg`, 'sens_humidity').subscribe();
        this.iconRegistry.loadSvg(`${this.basePath}sensors/o3.svg`, 'sens_o3').subscribe();
        this.iconRegistry.loadSvg(`${this.basePath}sensors/temperature.svg`, 'sens_temp').subscribe();
        this.iconRegistry.loadSvg(`${this.basePath}sensors/vbact.svg`, 'sens_vbact').subscribe();
        // #endregion
    }
}
IconsService.ɵfac = function IconsService_Factory(t) { return new (t || IconsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](angular_svg_icon__WEBPACK_IMPORTED_MODULE_1__["SvgIconRegistryService"])); };
IconsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IconsService, factory: IconsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: angular_svg_icon__WEBPACK_IMPORTED_MODULE_1__["SvgIconRegistryService"] }]; }, null); })();


/***/ }),

/***/ "9iAg":
/*!*********************************************************!*\
  !*** ./src/app/components/sensors/sensors.component.ts ***!
  \*********************************************************/
/*! exports provided: SensorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensorsComponent", function() { return SensorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _camera_view_camera_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../camera-view/camera-view.component */ "5kT4");
/* harmony import */ var _sensor_sensor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sensor/sensor.component */ "7o9e");





function SensorsComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sensor", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sensor_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", sensor_r3);
} }
function SensorsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SensorsComponent_div_0_div_3_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r1.sensors);
} }
class SensorsComponent {
    constructor() { }
    ngOnInit() {
        this.data = this.getMock();
        this.camData = {
            streamUrl: 'https://www.rmp-streaming.com/media/big-buck-bunny-360p.mp4',
            sensor: {
                id: 0,
                icon: 'sens_vbact',
                color: '#53EC62',
                title: 'VBACT',
                value: null
            }
        };
    }
    getMock() {
        return {
            groups: [{
                    title: 'Title',
                    sensors: [{
                            id: 0,
                            icon: 'sens_elec',
                            color: '#53EC62',
                            title: 'Electricity',
                            value: null
                        }, {
                            id: 0,
                            icon: 'sens_drop',
                            color: '#53EC62',
                            title: 'Water Pressure',
                            value: null
                        }, {
                            id: 0,
                            icon: 'sens_drop',
                            color: '#53EC62',
                            title: 'Water Pressure',
                            value: null
                        }]
                }, {
                    title: 'Ozone',
                    sensors: [{
                            id: 0,
                            icon: 'sens_o3',
                            color: '#53EC62',
                            title: 'level in water (ppm)',
                            value: null
                        }, {
                            id: 0,
                            icon: 'sens_o3',
                            color: '#FF1647',
                            title: 'Water Pressure',
                            value: null
                        }],
                }, {
                    title: 'Title',
                    sensors: [{
                            id: 0,
                            icon: 'sens_temp',
                            color: '#53EC62',
                            title: 'Temperature (0C)',
                            value: 20
                        }, {
                            id: 0,
                            icon: 'sens_humidity',
                            color: '#FF1647',
                            title: 'Humidity (%)',
                            value: 20
                        }]
                }, {
                    title: 'Ozon',
                    sensors: [{
                            id: 0,
                            icon: 'sens_vbact',
                            color: '#53EC62',
                            title: 'VBACT',
                            value: null
                        }, {
                            id: 0,
                            icon: 'sens_vbact',
                            color: '#53EC62',
                            title: 'VBACT',
                            value: null
                        }]
                }
            ]
        };
    }
}
SensorsComponent.ɵfac = function SensorsComponent_Factory(t) { return new (t || SensorsComponent)(); };
SensorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SensorsComponent, selectors: [["app-sensors"]], inputs: { data: "data" }, decls: 3, vars: 3, consts: [[4, "ngFor", "ngForOf"], [1, "sensor-item"], [3, "sensor", "videoSource"], [1, "group-title"], ["class", "sensor-item", 4, "ngFor", "ngForOf"], [1, "sensor-item", "v-space"], [3, "data"]], template: function SensorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SensorsComponent_div_0_Template, 5, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-camera-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.groups);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sensor", ctx.camData.sensor)("videoSource", ctx.camData.streamUrl);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _camera_view_camera_view_component__WEBPACK_IMPORTED_MODULE_2__["CameraViewComponent"], _sensor_sensor_component__WEBPACK_IMPORTED_MODULE_3__["SensorComponent"]], styles: [".group-title[_ngcontent-%COMP%] {\n    background-color: unset;\n    padding: 8px;\n    text-align: justify;\n}\n\n.v-space[_ngcontent-%COMP%] {\n    width: 260px;\n    height: 2px;\n    background: #EDF0F4;\n    padding-left: 4px;\n}\n\n.sensor-item[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    width: 260px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZW5zb3JzL3NlbnNvcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlbnNvcnMvc2Vuc29ycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyb3VwLXRpdGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLnYtc3BhY2Uge1xuICAgIHdpZHRoOiAyNjBweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiAjRURGMEY0O1xuICAgIHBhZGRpbmctbGVmdDogNHB4O1xufVxuXG4uc2Vuc29yLWl0ZW0ge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgd2lkdGg6IDI2MHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SensorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sensors',
                templateUrl: './sensors.component.html',
                styleUrls: ['./sensors.component.css']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "9pw4":
/*!*****************************************************!*\
  !*** ./src/app/components/table/table.component.ts ***!
  \*****************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TableComponent {
    constructor() { }
    ngOnInit() {
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(); };
TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], decls: 3, vars: 0, consts: [[1, "table-container"], [1, "table-header"], [1, "table-rows"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".table-container[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.table-header[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.table-rows[_ngcontent-%COMP%] {\n     display: flex;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUM7S0FDSSxhQUFhO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnRhYmxlLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuIC50YWJsZS1yb3dzIHtcbiAgICAgZGlzcGxheTogZmxleDtcbiB9XG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table',
                templateUrl: './table.component.html',
                styleUrls: ['./table.component.css']
            }]
    }], function () { return []; }, null); })();


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
    production: false,
    serverurl: ''
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
/* harmony import */ var src_app_services_icons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/icons.service */ "8cn1");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-svg-icon */ "OFbc");
/* harmony import */ var _shell_button_shell_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shell-button/shell-button.component */ "mB37");





const _c0 = function () { return { "width.px": 64, "height.px": 64, "padding.px": 1 }; };
const _c1 = ["*"];
class MainShellComponent {
    constructor(iconsService) {
        this.iconsService = iconsService;
        this.onViewStateCahnged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.viewState = 'main';
    }
}
MainShellComponent.ɵfac = function MainShellComponent_Factory(t) { return new (t || MainShellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_icons_service__WEBPACK_IMPORTED_MODULE_1__["IconsService"])); };
MainShellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainShellComponent, selectors: [["app-main-shell"]], outputs: { onViewStateCahnged: "onViewStateCahnged" }, ngContentSelectors: _c1, decls: 15, vars: 12, consts: [[1, "main-shell-container"], ["appResolutionFit", "", 1, "shell-top-bar-icon"], [1, "logo-icon", 3, "name", "svgStyle"], [1, "logo-text"], [1, "shell-top-bar-container"], [1, "shell-side-bar-container"], [1, "shell-side-button"], [3, "selected", "title", "icon", "onClick"]], template: function MainShellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "svg-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "HIGHPPER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " toolbar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-shell-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function MainShellComponent_Template_app_shell_button_onClick_9_listener() { ctx.viewState = "main"; return ctx.onViewStateCahnged.emit(ctx.viewState); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-shell-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function MainShellComponent_Template_app_shell_button_onClick_11_listener() { ctx.viewState = "prod"; return ctx.onViewStateCahnged.emit(ctx.viewState); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-shell-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function MainShellComponent_Template_app_shell_button_onClick_13_listener() { ctx.viewState = "container"; return ctx.onViewStateCahnged.emit(ctx.viewState); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "logo_img")("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.viewState == "main")("title", "Main page")("icon", "ing_corn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.viewState == "prod")("title", "Pizza in production")("icon", "ing_corn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.viewState == "container")("title", "Container update")("icon", "ing_corn");
    } }, directives: [angular_svg_icon__WEBPACK_IMPORTED_MODULE_2__["SvgIconComponent"], _shell_button_shell_button_component__WEBPACK_IMPORTED_MODULE_3__["ShellButtonComponent"]], styles: [".main-shell-container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;    \n    background: #EDF0F4;\n    display: grid;\n    grid-template-columns: auto 1fr;\n    grid-template-rows: auto 1fr;\n    \n}\n\n.shell-top-bar-icon[_ngcontent-%COMP%] {\n    display: flex;\n    grid-column: 1;\n    grid-row: 1;\n    background: #FFFFFF;\n}\n\n.shell-top-bar-container[_ngcontent-%COMP%] {\n    height: 60px;\n    top: 0px;\n    display: flex;    \n    background: #FFFFFF;\n    box-shadow: 7px 17px 16px rgb(0 0 0 / 10%);\n\n    \n    font-family: Exo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 24px;\n\n    color: #244583;\n    align-items: center;\n}\n\n.shell-side-bar-container[_ngcontent-%COMP%] {\n    width: 200px;\n    left: 0px;\n    top: 60px;    \n    background: #FFFFFF;    \n    box-shadow: 0px 18px 16px rgb(0 0 0 / 10%);\n    text-align: center;\n}\n\n.shell-side-button[_ngcontent-%COMP%] {\n    margin-top: 50px;\n}\n\n.nav-button[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n}\n\n.logo-icon[_ngcontent-%COMP%] {\n    display: inline;\n    margin-left: 6px;\n}\n\n.logo-text[_ngcontent-%COMP%] {\n    font-family: Exo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 24px;\n    line-height: 32px;\n    letter-spacing: -0.5px;\n    color: #244583;\n    align-self: center;\n    margin-top: -4px;\n    margin-left: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXNoZWxsL21haW4tc2hlbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsNEJBQTRCOztBQUVoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixRQUFRO0lBQ1IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwwQ0FBMEM7O0lBRTFDLDZDQUE2QztJQUM3QyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlOztJQUVmLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osU0FBUztJQUNULFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsMENBQTBDO0lBQzFDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1zaGVsbC9tYWluLXNoZWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1zaGVsbC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTsgICAgXG4gICAgYmFja2dyb3VuZDogI0VERjBGNDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcbiAgICBcbn1cblxuLnNoZWxsLXRvcC1iYXItaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBncmlkLWNvbHVtbjogMTtcbiAgICBncmlkLXJvdzogMTtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xufVxuXG4uc2hlbGwtdG9wLWJhci1jb250YWluZXIge1xuICAgIGhlaWdodDogNjBweDtcbiAgICB0b3A6IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4OyAgICBcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDdweCAxN3B4IDE2cHggcmdiKDAgMCAwIC8gMTAlKTtcblxuICAgIC8qIHRoZSB0ZXh0IGluIHRoZSB0b3AgYmFyIC0gY2FuIGJlIHJlbW92ZWQgKi9cbiAgICBmb250LWZhbWlseTogRXhvO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDI0cHg7XG5cbiAgICBjb2xvcjogIzI0NDU4MztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2hlbGwtc2lkZS1iYXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHRvcDogNjBweDsgICAgXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjsgICAgXG4gICAgYm94LXNoYWRvdzogMHB4IDE4cHggMTZweCByZ2IoMCAwIDAgLyAxMCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNoZWxsLXNpZGUtYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ubmF2LWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG59XG5cbi5sb2dvLWljb24ge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xufVxuXG4ubG9nby10ZXh0IHtcbiAgICBmb250LWZhbWlseTogRXhvO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbiAgICBjb2xvcjogIzI0NDU4MztcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogLTRweDtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainShellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-shell',
                templateUrl: './main-shell.component.html',
                styleUrls: ['./main-shell.component.css']
            }]
    }], function () { return [{ type: src_app_services_icons_service__WEBPACK_IMPORTED_MODULE_1__["IconsService"] }]; }, { onViewStateCahnged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Lquv":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_icons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/icons.service */ "8cn1");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card/card.component */ "lXt9");
/* harmony import */ var _sensors_sensors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sensors/sensors.component */ "9iAg");
/* harmony import */ var _donut_donut_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../donut/donut.component */ "+8ec");
/* harmony import */ var _value_bar_value_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../value-bar/value-bar.component */ "PlmD");
/* harmony import */ var _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ticket/ticket.component */ "jvX9");








class DashboardComponent {
    constructor(iconService) {
        this.iconService = iconService;
        // temp
        this.ticketValue = 12;
        this.valueBarValue = 44;
        this.donutValue = 43;
        this.secondDounatValue = 11;
    }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_icons_service__WEBPACK_IMPORTED_MODULE_1__["IconsService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 27, vars: 38, consts: [[1, "dashboard-container"], [1, "span-row-2", 3, "title"], [3, "title"], [3, "title", "subTitle", "value", "valueTitle", "secondValue", "secondValueTitle"], [3, "title", "subTitle", "value", "valueColor", "valueTitle", "secondValue", "dunatColor", "secondValueTitle"], [1, "span-col-2", 3, "title"], [1, "flex", "ticket-container"], [3, "title", "value"], [3, "value"], [1, "span-col-3", 3, "title"], [3, "title", "icon", "value"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sensors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-donut", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-donut", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-value-bar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-value-bar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-value-bar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-value-bar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-value-bar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-value-bar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-value-bar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-value-bar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-value-bar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "app-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-ticket", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-ticket", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-ticket", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-ticket", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-ticket", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-ticket", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-ticket", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Sensors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Today")("subTitle", "05.11.2020")("value", 125)("valueTitle", "Pizzas made")("secondValue", 4)("secondValueTitle", "Fialed Pizzas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Type of dugh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Today")("subTitle", "05.11.2020")("value", 85)("valueColor", "#4686FF")("valueTitle", "13\u201D Thick")("secondValue", 40)("dunatColor", "#244583")("secondValueTitle", "14\u201D Thin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Distribution by additions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Onion")("value", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Ingredients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Mashroom")("icon", "ing_mashroom")("value", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);
    } }, directives: [_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _sensors_sensors_component__WEBPACK_IMPORTED_MODULE_3__["SensorsComponent"], _donut_donut_component__WEBPACK_IMPORTED_MODULE_4__["DonutComponent"], _value_bar_value_bar_component__WEBPACK_IMPORTED_MODULE_5__["ValueBarComponent"], _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_6__["TicketComponent"]], styles: [".dashboard-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: auto 0.3fr 0.3fr auto auto;\n    grid-template-rows: 1fr 1fr;\n    column-gap: 1em;\n    row-gap: 1em;\n    margin-left: 1em;\n    margin-right: 1em;    \n}\n\n.card[_ngcontent-%COMP%] {\n    padding-left: 16px;\n    margin-bottom: 56px;\n}\n\n.span-col-2[_ngcontent-%COMP%] {\n    grid-column: 4 / 6;\n}\n\n.span-row-2[_ngcontent-%COMP%] {\n    grid-row: 1 / 3;\n}\n\n.span-col-3[_ngcontent-%COMP%] {\n    grid-column: 2 / 6;\n}\n\n.ticket-container[_ngcontent-%COMP%] {\n    justify-content: space-evenly;\n    overflow: auto;\n    height: 117%;\n    padding: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsaURBQWlEO0lBQ2pELDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAwLjNmciAwLjNmciBhdXRvIGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICAgIGNvbHVtbi1nYXA6IDFlbTtcbiAgICByb3ctZ2FwOiAxZW07XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTsgICAgXG59XG5cbi5jYXJkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTZweDtcbn1cblxuLnNwYW4tY29sLTIge1xuICAgIGdyaWQtY29sdW1uOiA0IC8gNjtcbn1cblxuLnNwYW4tcm93LTIge1xuICAgIGdyaWQtcm93OiAxIC8gMztcbn1cblxuLnNwYW4tY29sLTMge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gNjtcbn1cblxuLnRpY2tldC1jb250YWluZXIge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGhlaWdodDogMTE3JTtcbiAgICBwYWRkaW5nOiA3cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: src_app_services_icons_service__WEBPACK_IMPORTED_MODULE_1__["IconsService"] }]; }, null); })();


/***/ }),

/***/ "NB9D":
/*!***************************************************************************!*\
  !*** ./src/app/components/container-update/container-update.component.ts ***!
  \***************************************************************************/
/*! exports provided: ContainerUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerUpdateComponent", function() { return ContainerUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContainerUpdateComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContainerUpdateComponent.ɵfac = function ContainerUpdateComponent_Factory(t) { return new (t || ContainerUpdateComponent)(); };
ContainerUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContainerUpdateComponent, selectors: [["app-container-update"]], decls: 2, vars: 0, template: function ContainerUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "container-update works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFpbmVyLXVwZGF0ZS9jb250YWluZXItdXBkYXRlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-container-update',
                templateUrl: './container-update.component.html',
                styleUrls: ['./container-update.component.css']
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
        this.maxValueHeight = 155;
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
    } }, directives: [_legend_legend_component__WEBPACK_IMPORTED_MODULE_1__["LegendComponent"]], styles: [".bar-container[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: baseline;\n    width: 60px;\n    height: 171px;\n    background: #FFFFFF;\n    box-shadow: inset 0px 0px 29px rgba(196, 196, 196, 0.5);\n    border-radius: 10px;\n}\n\n.bar-value[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 164px;\n    background: #4686FF;\n    opacity: 1;\n    border-radius: 7px;\n    align-self: flex-end;\n    margin-block-end: 7px;\n    margin-inline-start: 9px;\n}\n\n.bar-legend[_ngcontent-%COMP%] {\n    margin-left: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92YWx1ZS1iYXIvdmFsdWUtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVEQUF1RDtJQUN2RCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92YWx1ZS1iYXIvdmFsdWUtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiAxNzFweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMjlweCByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmJhci12YWx1ZSB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiAxNjRweDtcbiAgICBiYWNrZ3JvdW5kOiAjNDY4NkZGO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDdweDtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiA5cHg7XG59XG5cbi5iYXItbGVnZW5kIHtcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xufSJdfQ== */"] });
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "Lquv");
/* harmony import */ var _components_production_production_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/production/production.component */ "5TVV");
/* harmony import */ var _components_container_update_container_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/container-update/container-update.component */ "NB9D");







function AppComponent_app_dashboard_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-dashboard");
} }
function AppComponent_app_production_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-production");
} }
function AppComponent_app_container_update_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-container-update");
} }
class AppComponent {
    constructor() {
        this.title = 'highpper-ui';
        this.donutValue = 5;
        this.secondDounatValue = 33;
        this.valueBarValue = 12;
        this.ticketValue = 11;
        this.viewState = 'main';
    }
    ngOnInit() {
        //  document.getElementById('file').onchange = (data) => {
        //    console.log('change', data);
        //  }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 3, consts: [[3, "onViewStateCahnged"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-main-shell", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onViewStateCahnged", function AppComponent_Template_app_main_shell_onViewStateCahnged_0_listener($event) { return ctx.viewState = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_app_dashboard_1_Template, 1, 0, "app-dashboard", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_app_production_2_Template, 1, 0, "app-production", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_app_container_update_3_Template, 1, 0, "app-container-update", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewState == "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewState == "prod");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewState == "container");
    } }, directives: [_components_main_shell_main_shell_component__WEBPACK_IMPORTED_MODULE_1__["MainShellComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _components_production_production_component__WEBPACK_IMPORTED_MODULE_4__["ProductionComponent"], _components_container_update_container_update_component__WEBPACK_IMPORTED_MODULE_5__["ContainerUpdateComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".lagend-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n  }\n  \n  .lagend-value[_ngcontent-%COMP%] {\n    font-family: Exo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 48px;\n    line-height: 64px;  \n    text-align: center;\n  }\n  \n  .lagend-title[_ngcontent-%COMP%] {\n    font-family: Exo;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 20px;\n    line-height: 27px;\n    display: flex;\n    align-items: center;\n    text-align: center;\n    justify-content: center;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sZWdlbmQvbGVnZW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsdUJBQXVCO0VBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sZWdlbmQvbGVnZW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5sYWdlbmQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gIH1cbiAgXG4gIC5sYWdlbmQtdmFsdWUge1xuICAgIGZvbnQtZmFtaWx5OiBFeG87XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICBsaW5lLWhlaWdodDogNjRweDsgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLmxhZ2VuZC10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IEV4bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfSJdfQ== */"] });
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
/* harmony import */ var _components_sensors_sensors_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sensors/sensors.component */ "9iAg");
/* harmony import */ var _components_sensors_sensor_sensor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sensors/sensor/sensor.component */ "7o9e");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-svg-icon */ "OFbc");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/table/table.component */ "9pw4");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "Lquv");
/* harmony import */ var _components_production_production_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/production/production.component */ "5TVV");
/* harmony import */ var _components_container_update_container_update_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/container-update/container-update.component */ "NB9D");
/* harmony import */ var _components_shell_button_shell_button_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/shell-button/shell-button.component */ "mB37");
/* harmony import */ var _components_camera_view_camera_view_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/camera-view/camera-view.component */ "5kT4");
/* harmony import */ var _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/grid/grid.component */ "m4bG");

























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            angular_svg_icon__WEBPACK_IMPORTED_MODULE_15__["AngularSvgIconModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"],
        _components_donut_donut_component__WEBPACK_IMPORTED_MODULE_5__["DonutComponent"],
        _components_value_bar_value_bar_component__WEBPACK_IMPORTED_MODULE_7__["ValueBarComponent"],
        _components_legend_legend_component__WEBPACK_IMPORTED_MODULE_8__["LegendComponent"],
        _components_ticket_ticket_component__WEBPACK_IMPORTED_MODULE_9__["TicketComponent"],
        _components_main_shell_main_shell_component__WEBPACK_IMPORTED_MODULE_11__["MainShellComponent"],
        _components_sensors_sensors_component__WEBPACK_IMPORTED_MODULE_12__["SensorsComponent"],
        _components_sensors_sensor_sensor_component__WEBPACK_IMPORTED_MODULE_13__["SensorComponent"],
        _components_table_table_component__WEBPACK_IMPORTED_MODULE_16__["TableComponent"],
        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
        _components_production_production_component__WEBPACK_IMPORTED_MODULE_18__["ProductionComponent"],
        _components_container_update_container_update_component__WEBPACK_IMPORTED_MODULE_19__["ContainerUpdateComponent"],
        _components_shell_button_shell_button_component__WEBPACK_IMPORTED_MODULE_20__["ShellButtonComponent"],
        _components_camera_view_camera_view_component__WEBPACK_IMPORTED_MODULE_21__["CameraViewComponent"],
        _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_22__["GridComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_15__["AngularSvgIconModule"]] }); })();
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
                    _components_main_shell_main_shell_component__WEBPACK_IMPORTED_MODULE_11__["MainShellComponent"],
                    _components_sensors_sensors_component__WEBPACK_IMPORTED_MODULE_12__["SensorsComponent"],
                    _components_sensors_sensor_sensor_component__WEBPACK_IMPORTED_MODULE_13__["SensorComponent"],
                    _components_table_table_component__WEBPACK_IMPORTED_MODULE_16__["TableComponent"],
                    _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
                    _components_production_production_component__WEBPACK_IMPORTED_MODULE_18__["ProductionComponent"],
                    _components_container_update_container_update_component__WEBPACK_IMPORTED_MODULE_19__["ContainerUpdateComponent"],
                    _components_shell_button_shell_button_component__WEBPACK_IMPORTED_MODULE_20__["ShellButtonComponent"],
                    _components_camera_view_camera_view_component__WEBPACK_IMPORTED_MODULE_21__["CameraViewComponent"],
                    _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_22__["GridComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                    angular_svg_icon__WEBPACK_IMPORTED_MODULE_15__["AngularSvgIconModule"].forRoot()
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
/* harmony import */ var src_app_services_icons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/icons.service */ "8cn1");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-svg-icon */ "OFbc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function () { return { "margin.px": 24 }; };
class TicketComponent {
    constructor(iconsService) {
        this.iconsService = iconsService;
        this.title = "Corn";
        this.icon = "ing_corn";
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
TicketComponent.ɵfac = function TicketComponent_Factory(t) { return new (t || TicketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_icons_service__WEBPACK_IMPORTED_MODULE_1__["IconsService"])); };
TicketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TicketComponent, selectors: [["app-ticket"]], inputs: { title: "title", icon: "icon", value: "value", valueDescription: "valueDescription", exprationDate: "exprationDate" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 16, vars: 16, consts: [[1, "ticket-container"], [1, "ticket-icon-background"], [3, "name", "svgStyle"], [1, "ticket-title"], [1, "ticket-value"], [1, "ticket-value-description"], [1, "ticket-experation-date"], [1, "ticket-background-value"]], template: function TicketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "svg-icon", 2);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.icon)("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.valueColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.value, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.valueDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 12, ctx.exprationDate, "short"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.valueHeight)("margin-top", ctx.valueMargineTop);
    } }, directives: [angular_svg_icon__WEBPACK_IMPORTED_MODULE_2__["SvgIconComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".ticket-container[_ngcontent-%COMP%] {\n    width: 180px;\n    left: 0px;\n    top: 0px;\n    background: #FFFFFF;    \n    border-radius: 10px;    \n    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.1);\n}\n\n.ticket-title[_ngcontent-%COMP%] {\n    margin-top: 12px;\n    font-family: Exo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 30px;\n    line-height: 40px;\n    text-align: center;\n    color: #444444;\n}\n\n.ticket-value[_ngcontent-%COMP%] {\n    height: 54px;\n    font-family: Exo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 40px;\n    line-height: 53px;\n    text-align: center;\n    margin-top: 19px;\n}\n\n.ticket-value-description[_ngcontent-%COMP%] {\n    height: 27px;\n    font-family: Exo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 20px;\n    line-height: 27px;\n    text-align: center;\n    color: #444444;\n}\n\n.ticket-experation-date[_ngcontent-%COMP%] {\n    font-family: Exo;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 21px;\n    text-align: center;\n    color: #444444;    \n}\n\n.ticket-background-value[_ngcontent-%COMP%] {\n    width: 180px;\n    height: 76px;\n    left: 0px;\n    top: 314px;\n    background: #E1E4E9;\n    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;  \n}\n\n.ticket-icon-background[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 100px;\n    height: 100px;\n    background: #FFFFFF;\n    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.1);\n    border-radius: 88px;\n}\n\n.icon[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aWNrZXQvdGlja2V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osU0FBUztJQUNULFFBQVE7SUFDUixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osU0FBUztJQUNULFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsMkNBQTJDO0lBQzNDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFDM0MsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGlja2V0L3RpY2tldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpY2tldC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAwcHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjsgICAgXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgICAgXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnRpY2tldC10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBmb250LWZhbWlseTogRXhvO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNDQ0NDQ0O1xufVxuXG4udGlja2V0LXZhbHVlIHtcbiAgICBoZWlnaHQ6IDU0cHg7XG4gICAgZm9udC1mYW1pbHk6IEV4bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1M3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxOXB4O1xufVxuXG4udGlja2V0LXZhbHVlLWRlc2NyaXB0aW9uIHtcbiAgICBoZWlnaHQ6IDI3cHg7XG4gICAgZm9udC1mYW1pbHk6IEV4bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzQ0NDQ0NDtcbn1cblxuLnRpY2tldC1leHBlcmF0aW9uLWRhdGUge1xuICAgIGZvbnQtZmFtaWx5OiBFeG87XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzQ0NDQ0NDsgICAgXG59XG5cbi50aWNrZXQtYmFja2dyb3VuZC12YWx1ZSB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogNzZweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAzMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjRTFFNEU5O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgIFxufVxuXG4udGlja2V0LWljb24tYmFja2dyb3VuZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA4OHB4O1xufVxuXG4uaWNvbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ticket',
                templateUrl: './ticket.component.html',
                styleUrls: ['./ticket.component.css']
            }]
    }], function () { return [{ type: src_app_services_icons_service__WEBPACK_IMPORTED_MODULE_1__["IconsService"] }]; }, { title: [{
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
/*! exports provided: CardComponent, CARD_SIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_SIZE", function() { return CARD_SIZE; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["*"];
class CardComponent {
    constructor() {
        this.title = 'Performance';
        this.size = CARD_SIZE.small;
    }
    ngOnInit() {
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { title: "title", size: "size" }, ngContentSelectors: _c0, decls: 7, vars: 1, consts: [[1, "card-container"], [1, "flex"], [1, "card-title-border"], [1, "card-title"], [1, "card-content"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, styles: [".card-container[_ngcontent-%COMP%] {\n    background: #FFFFFF;\n    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n    padding: 20px;\n}\n\n.card-title[_ngcontent-%COMP%] {\n    height: 32px;\n    left: 603px;\n    top: 110px;\n    font-family: Exo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 24px;\n    line-height: 32px;\n    letter-spacing: -0.5px;\n    color: #244583;\n    margin-left: 5px;\n    margin-top: 30px;\n}\n\n.card-title-border[_ngcontent-%COMP%] {\n    width: 4px;\n    height: 32px;\n    left: 589px;\n    top: 110px;\n    background: #FFA959;\n    border-radius: 2px;\n    margin-left: 30px;\n    margin-top: 30px;\n}\n\n.card-content[_ngcontent-%COMP%] {\n    margin-top: 17px;\n    margin-left: 20px;\n    margin-right: 20px;\n    text-align: -webkit-center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFDM0MsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGxlZnQ6IDYwM3B4O1xuICAgIHRvcDogMTEwcHg7XG4gICAgZm9udC1mYW1pbHk6IEV4bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG4gICAgY29sb3I6ICMyNDQ1ODM7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uY2FyZC10aXRsZS1ib3JkZXIge1xuICAgIHdpZHRoOiA0cHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGxlZnQ6IDU4OXB4O1xuICAgIHRvcDogMTEwcHg7XG4gICAgYmFja2dyb3VuZDogI0ZGQTk1OTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmNhcmQtY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogMTdweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.css']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
var CARD_SIZE;
(function (CARD_SIZE) {
    CARD_SIZE[CARD_SIZE["small"] = 0] = "small";
    CARD_SIZE[CARD_SIZE["large"] = 1] = "large";
    CARD_SIZE[CARD_SIZE["large_height"] = 2] = "large_height";
    CARD_SIZE[CARD_SIZE["large_width"] = 3] = "large_width";
})(CARD_SIZE || (CARD_SIZE = {}));


/***/ }),

/***/ "m4bG":
/*!***************************************************!*\
  !*** ./src/app/components/grid/grid.component.ts ***!
  \***************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GridComponent {
    constructor() { }
    ngOnInit() {
    }
}
GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(); };
GridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridComponent, selectors: [["app-grid"]], decls: 12, vars: 0, consts: [[1, "grid-container"], [1, "grid-header-container"], [1, "grid-header-item"], [1, "grid-body-container"], [1, "grid-body-line"], [1, "grid-cell-item"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "item 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " cell item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " cell item 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".grid-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-rows: auto 1fr;\n}\n\n.grid-header-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(auto);\n}\n\n.grid-header-item[_ngcontent-%COMP%] {\n    font-family: Exo;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 18px;\n    line-height: 28px;\n    text-align: center;\n    color: #444444;\n}\n\n.grid-body-container[_ngcontent-%COMP%] {\n    background: #FFFFFF;\n    box-shadow: inset 0px 0px 29px rgba(196, 196, 196, 0.5);\n    border-radius: 10px;\n}\n\n.grid-body-line[_ngcontent-%COMP%] {\n    background: #FFFFFF;\n    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n}\n\n.grid-cell-item[_ngcontent-%COMP%] {\n    font-family: Exo;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 24px;\n    line-height: 28px;\n    display: flex;\n    align-items: center;\n    text-align: center;\n    color: #444444;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmlkL2dyaWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix1REFBdUQ7SUFDdkQsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDJDQUEyQztJQUMzQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dyaWQvZ3JpZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG59XG5cbi5ncmlkLWhlYWRlci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0byk7XG59XG5cbi5ncmlkLWhlYWRlci1pdGVtIHtcbiAgICBmb250LWZhbWlseTogRXhvO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM0NDQ0NDQ7XG59XG5cbi5ncmlkLWJvZHktY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMjlweCByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmdyaWQtYm9keS1saW5lIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmdyaWQtY2VsbC1pdGVtIHtcbiAgICBmb250LWZhbWlseTogRXhvO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNDQ0NDQ0O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid',
                templateUrl: './grid.component.html',
                styleUrls: ['./grid.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mB37":
/*!*******************************************************************!*\
  !*** ./src/app/components/shell-button/shell-button.component.ts ***!
  \*******************************************************************/
/*! exports provided: ShellButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellButtonComponent", function() { return ShellButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-svg-icon */ "OFbc");




const _c0 = function (a0) { return { selected: a0 }; };
const _c1 = function (a1) { return { "margin.px": 40, "fill": a1 }; };
class ShellButtonComponent {
    constructor() {
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
}
ShellButtonComponent.ɵfac = function ShellButtonComponent_Factory(t) { return new (t || ShellButtonComponent)(); };
ShellButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShellButtonComponent, selectors: [["app-shell-button"]], inputs: { icon: "icon", state: "state", selected: "selected", title: "title" }, outputs: { onClick: "onClick" }, decls: 4, vars: 14, consts: [[1, "button-container", 3, "ngClass", "click"], [3, "applyClass", "name", "svgStyle"], [1, "button-title", 3, "ngClass"]], template: function ShellButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShellButtonComponent_Template_div_click_0_listener() { return ctx.onClick.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "svg-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.selected));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("selected-svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("applyClass", ctx.selected)("name", ctx.icon)("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx.selected ? "#FDFDFD" : "#4686FF"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.selected));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_2__["SvgIconComponent"]], styles: [".button-container[_ngcontent-%COMP%] {\n    box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.25);\n    border-radius: 10px;\n    width: 160px;\n    height: 160px;\n    background: #FDFDFD;\n    margin-left: 20px;\n    cursor: pointer;\n}\n\n.selected[_ngcontent-%COMP%] {\n    background: #4686FF;\n    color: #FDFDFD;\n}\n\n.selected-svg[_ngcontent-%COMP%] {\n   \n   fill: teal;\n}\n\n.un-selected-title[_ngcontent-%COMP%] {\n    color: #4686FF;\n    background-color: #FDFDFD;\n}\n\n.button-title[_ngcontent-%COMP%] {\n    font-family: Exo;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 20px;\n    line-height: 22px;\n    margin-top: -30px;\n    max-width: 157px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGVsbC1idXR0b24vc2hlbGwtYnV0dG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrREFBa0Q7SUFDbEQsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7R0FDRyxvQkFBb0I7R0FDcEIsVUFBVTtBQUNiOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hlbGwtYnV0dG9uL3NoZWxsLWJ1dHRvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi1jb250YWluZXIge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIGhlaWdodDogMTYwcHg7XG4gICAgYmFja2dyb3VuZDogI0ZERkRGRDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZDogIzQ2ODZGRjtcbiAgICBjb2xvcjogI0ZERkRGRDtcbn1cblxuLnNlbGVjdGVkLXN2ZyB7XG4gICAvKiBjb2xvcjogI0ZERkRGRDsgKi9cbiAgIGZpbGw6IHRlYWw7XG59XG5cbi51bi1zZWxlY3RlZC10aXRsZSB7XG4gICAgY29sb3I6ICM0Njg2RkY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZERkRGRDtcbn1cblxuLmJ1dHRvbi10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IEV4bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgbWF4LXdpZHRoOiAxNTdweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShellButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shell-button',
                templateUrl: './shell-button.component.html',
                styleUrls: ['./shell-button.component.css']
            }]
    }], function () { return []; }, { icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
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
//# sourceMappingURL=main-es2015.js.map