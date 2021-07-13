import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-main-shell',
  templateUrl: './main-shell.component.html',
  styleUrls: ['./main-shell.component.css']
})
export class MainShellComponent implements OnInit {

  @Output() public onViewStateCahnged = new EventEmitter<string>();
  
  constructor(private iconsService: IconsService) { }

  public viewState: 'main' | 'prod' | 'container';
  ngOnInit(): void {
    this.viewState = 'main';
  }

}
