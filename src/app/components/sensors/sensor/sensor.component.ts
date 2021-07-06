import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {

  constructor() { 
    this.data = {
       id: 0,
       title: 'title',
       color: '#FFFF',
       icon: 'camera' 
    }  
  }

  @Input() public data: ISensor;

  ngOnInit(): void {
  }

}

export interface ISensor {
  id: number;
  title: string;
  icon: string;
  color: string;
}