import { Component, OnInit, Input } from '@angular/core';
import { SafeMethodCall } from '@angular/compiler';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() public title = 'Performance';
  @Input() public size: CARD_SIZE;
  
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