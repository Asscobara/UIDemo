import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shell-button',
  templateUrl: './shell-button.component.html',
  styleUrls: ['./shell-button.component.css']
})
export class ShellButtonComponent implements OnInit {

  @Input() public icon;
  @Input() public state: string;
  @Input() public selected: boolean;
  @Input() public title: string;
  
  @Output() public onClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
