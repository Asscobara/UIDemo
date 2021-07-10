import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // temp
  public ticketValue: number = 12;
  public valueBarValue: number = 44;

  public donutValue: number = 43;
  public secondDounatValue: number = 11;
  
  constructor() { }

  ngOnInit(): void {
  }

}
