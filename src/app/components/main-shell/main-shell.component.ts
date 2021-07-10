import { Component, OnInit } from '@angular/core';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-main-shell',
  templateUrl: './main-shell.component.html',
  styleUrls: ['./main-shell.component.css']
})
export class MainShellComponent implements OnInit {

  constructor(private iconsService: IconsService) { }

  ngOnInit(): void {
  }

}
