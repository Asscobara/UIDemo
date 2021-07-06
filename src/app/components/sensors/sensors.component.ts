import { Component, OnInit } from '@angular/core';
import { ISensor } from './sensor/sensor.component';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {

  constructor() { }

  public groups: ISensorsGroup;

  ngOnInit(): void {

  }

}


export interface ISensorsGroup {
  title: string;
  sensors: ISensor[];
}