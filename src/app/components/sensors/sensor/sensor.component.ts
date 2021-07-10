import { Component, OnInit, Input } from '@angular/core';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {

  constructor(private iconsService: IconsService) { 
    this.data = {
       id: 0,
       title: 'corn',
       color: '#53EC62',
       icon: 'ing_corn',
       value: null
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
  value: number;
}