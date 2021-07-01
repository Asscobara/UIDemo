import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { DonutComponent } from './components/donut/donut.component';
import { FormsModule } from '@angular/forms';
import { ValueBarComponent } from './components/value-bar/value-bar.component';
import { LegendComponent } from './components/legend/legend.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { CommonModule } from '@angular/common';
import { MainShellComponent } from './components/main-shell/main-shell.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            CardComponent,
            DonutComponent,
            ValueBarComponent,
            LegendComponent,
            TicketComponent,
            MainShellComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            FormsModule,
            CommonModule
        ],
        providers: [],
        bootstrap: [AppComponent],
        schemas: [
            CUSTOM_ELEMENTS_SCHEMA,
            NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map