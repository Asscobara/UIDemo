import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ILagendData } from '../legend/legend.component';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnChanges {

  @Input() public value: number = 65;
  @Input() public secondValue: number = 65;
  @Input() public title: string = "test123";
  @Input() public valueColor: string = "#53EC62";
  @Input() public dunatColor: string = "#FF1647";
  @Input() public valueTitle: string = "V1";
  @Input() public secondValueTitle: string = "V2";

  public dashArray: string;

  public data = [{
    title: 'a1',
    color: this.valueColor,  
  }, {
    title: 'a2',
    color: this.dunatColor
  }];

  ngOnChanges(changes: SimpleChanges) {
    this.items = [{
      name: this.valueTitle,
      count: +this.value,
      color: this.valueColor
    },{
      name: this.secondValueTitle,
      count: +this.secondValue,
      color: this.dunatColor
    }];

    this._total = this.items.map(a=>a.count).reduce((x,y)=>x+y);
    
  }

  public items:Array<{name:string,count:number,color:string}>;

  private _total:number =0;
 
  constructor() {
  }

  getPerimeter(radius:number):number {
    return Math.PI*2*radius;
  }

  getColor(index:number):string {
    return this.items[index].color;
  }

  getOffset(radius:number,index:number):number {   
    var percent=0;
    for(var i=0;i<index;i++) {
      percent+=((this.items[i].count)/this._total);
    }
    var perimeter = Math.PI*2*radius;
    return perimeter*percent;
  }

  lagendItems() : ILagendData[] {
    return this.items.map(i => {
      return { 
        title: i.name, 
        value: i.count, 
        valueColor: i.color 
      }; 
    });
  }
}
