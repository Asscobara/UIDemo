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
import { SensorsComponent } from './components/sensors/sensors.component';
import { SensorComponent } from './components/sensors/sensor/sensor.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TableComponent } from './components/table/table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductionComponent } from './components/production/production.component';
import { ContainerUpdateComponent } from './components/container-update/container-update.component';
import { ShellButtonComponent } from './components/shell-button/shell-button.component';
import { CameraViewComponent } from './components/camera-view/camera-view.component';
import { GridComponent } from './components/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DonutComponent,
    ValueBarComponent,
    LegendComponent,
    TicketComponent,
    MainShellComponent,
    SensorsComponent,
    SensorComponent,
    TableComponent,
    DashboardComponent,
    ProductionComponent,
    ContainerUpdateComponent,
    ShellButtonComponent,
    CameraViewComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
