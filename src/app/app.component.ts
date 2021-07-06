import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'highpper-ui';
  public donutValue = 5;
  public secondDounatValue = 33;
  public valueBarValue = 12;
  public ticketValue = 11;

  ngOnInit() {
  //  document.getElementById('file').onchange = (data) => {
  //    console.log('change', data);
  //  }
  }
  
}
