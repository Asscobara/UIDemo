import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { ILagendData } from '../legend/legend.component';

@Component({
  selector: 'app-value-bar',
  templateUrl: './value-bar.component.html',
  styleUrls: ['./value-bar.component.css']
})
export class ValueBarComponent implements OnInit, OnChanges {

  constructor() { }
  
  @Input() public value = 33;
  @Input() public title = 'title';

  public height: string;
  public opacity: number;

  private readonly maxValue = 47;
  private readonly maxValueHeight = 164;
  
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const valuePrecentage = this.value / this.maxValue;
    const height = this.maxValueHeight * valuePrecentage;
    this.opacity = valuePrecentage ;
    this.height = `${height}px`;
  }

  public lagendItems(): ILagendData[] {
    return [ { title: this.title, value: this.value, valueColor: '#244583' } ];
  }
}



