import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { ILagendData } from '../legend/legend.component';

@Component({
  selector: 'app-value-bar',
  templateUrl: './value-bar.component.html',
  styleUrls: ['./value-bar.component.scss']
})
export class ValueBarComponent implements OnInit, OnChanges {

  constructor() { }
  
  @Input() public value = 33;
  @Input() public title = 'title';
  @Input() public horizontal = false;
  @Input() public showLegend = true;
  @Input() public useOpacity = true;
  @Input() public showPrecentage = false;

  public height = '40px';
  public width = '40px';
  public opacity: number;
  public valuePrecentage: number;
  private readonly maxValue = 47;
  private readonly maxValueHeight = 155;
  
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const valuePrecentage = this.value / this.maxValue;
    this.valuePrecentage = valuePrecentage * 100;
    const height = this.maxValueHeight * valuePrecentage;
    this.opacity = this.useOpacity ? valuePrecentage : 1;
    if (this.horizontal) {
      this.width = `${height}px`;
    } else {
      this.height = `${height}px`;
    }    
  }

  public lagendItems(): ILagendData[] {
    return [ { title: this.title, value: this.value, valueColor: '#244583' } ];
  }
}



