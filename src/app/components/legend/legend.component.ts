import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss']
})
export class LegendComponent implements OnChanges {

  @Input() public items: ILagendData[];

  public gridColumns: string = "1fr";

  constructor() { }

  ngOnChanges(changes: SimpleChanges) { 
    this.gridColumns = "";
    this.items.forEach(i => this.gridColumns = `${this.gridColumns} 1fr`);
  }
}

export interface ILagendData {
  title: string;
  value: number;
  valueColor: string;
}
