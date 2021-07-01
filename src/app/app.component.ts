import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'highpper-ui';
  public donutValue: number = 5;
  public secondDounatValue: number = 33;
  public valueBarValue: number = 12;
  public ticketValue: number = 11;

  ngOnInit() {
    document.getElementById('file').onchange = (data) => {
      console.log('change', data);
    }
  }
  
}
