import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit, OnChanges {

  @Input() public title: string = "Corn";
  @Input() public icon: string = "ing_corn";
  @Input() public value: number = 17;
  @Input() public valueDescription: string = "1.5 kg";
  @Input() public exprationDate: Date = new Date();

  private readonly minValueMargineTop = -336;
  private readonly maxValueHeight = 341;

  private colors = [
    {value: 15, color: "#FF1647"},
    {value: 50, color: "#FF922D"},
    {value: 100, color: "#4686FF"}
  ];

  public valueHeight: string;
  public valueMargineTop: string;
  
  public get valueColor(): string {
    for (let i = 0; i < this.colors.length; i++) {
        if (this.value < this.colors[i].value) {
          return this.colors[i].color;
        }
    }
    return "#4686FF";
  }

  constructor(private iconsService: IconsService) { 

  }
  
  ngOnInit(): void {
    this.ngOnChanges(null);
  }

  ngOnChanges(changes: SimpleChanges) {

    const height = this.maxValueHeight * (this.value / 100);
    this.valueHeight = `${height}px`;
    const diffFromMaxHeight = this.maxValueHeight - height;
    this.valueMargineTop = `${(this.minValueMargineTop + diffFromMaxHeight)}px`;
  }

}
