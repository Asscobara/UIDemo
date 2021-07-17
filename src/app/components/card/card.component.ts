import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() public title = 'Performance';
  @Input() public size: CARD_SIZE;
  @Input() public cardActions: TemplateRef<any>;
  
  constructor() { 
    this.size = CARD_SIZE.small;
  }

  ngOnInit(): void {
  }

}

export enum CARD_SIZE {
  small, 
  large,
  large_height,
  large_width 
}