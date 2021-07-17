import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ISensor } from '../sensors/sensor/sensor.component';

@Component({
  selector: 'app-camera-view',
  templateUrl: './camera-view.component.html',
  styleUrls: ['./camera-view.component.scss']
})
export class CameraViewComponent implements OnInit {

  @Input() public videoSource: string;
  @Input() public sensor: ISensor;
  @ViewChild('videoPlayer') videoplayer: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  public toggleVideo() {
    this.videoplayer.nativeElement.play();
  }

}
