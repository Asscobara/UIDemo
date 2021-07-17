import { Component, OnInit, Input } from '@angular/core';
import { ISensor } from './sensor/sensor.component';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss']
})
export class SensorsComponent implements OnInit {

  @Input() public data: ISensors;

  public camData: any;
  constructor() { }

  public groups: ISensorsGroup;

  ngOnInit(): void {
    this.data = this.getMock();
    this.camData = {
     streamUrl: 'https://www.rmp-streaming.com/media/big-buck-bunny-360p.mp4', 
     sensor: {
      id: 0,
      icon: 'sens_cam',
      color: '#53EC62',
      title: 'Camera',
      value: null
      }
    };
  }

  private getMock(): ISensors {
    return {
      groups: [{
        title: 'Title',
        sensors:[{
          id: 0,
          icon: 'sens_elec',
          color: '#53EC62',
          title: 'Electricity',
          value: null
        }, {
          id: 0,
          icon: 'sens_cloud',
          color: '#53EC62',
          title: 'Air Pressure',
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
        sensors:[{
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
          sensors:[{
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
        sensors:[{
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
    }
  }

}


export interface ISensorsGroup {
  title: string;
  sensors: ISensor[];
}

export interface ISensors {
  groups: ISensorsGroup[];
}