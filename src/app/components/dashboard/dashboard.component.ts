import { Component, OnInit } from '@angular/core';
import { IconsService } from 'src/app/services/icons.service';
import { IngredienceKeyMap } from 'src/app/utils/ui.utils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // temp
  public ticketValue: number = 12;
  public valueBarValue: number = 44;

  public donutValue: number = 43;
  public secondDounatValue: number = 11;
  
  public ingredientsViewState = 'dough';

  public ingredienceKeyMap = IngredienceKeyMap;
  public Object = Object;
  
  constructor(public iconService: IconsService) { }

  ngOnInit(): void {
  }

}
