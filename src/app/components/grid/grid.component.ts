import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public mockData: IGridData = {
    headers: [
      { title: 'Pizza ID 1' },
      { title: 'Queue  #' },
      { title: 'Order source' },
      { title: 'Order Time' },
      { title: 'Dough size' },
      { title: 'Dough Type' },
      { title: 'Toppings' }
    ],
    lines: [
      { data: ['885', '2', 'Order source', '11:32', '14', 'A', '5'] },
      { data: ['11', '22', '33', '44', '55'] },
      { data: ['111', '222', '333', '444', '555'] },
      { data: ['11111', '22222', '33333', '44444', '55555'] },
      { data: ['111111', '222222', '33333', '44444', '555555'] },
      { data: ['111111', '222222', '33333', '44444', '555555'] },
      { data: ['111111', '222222', '33333', '44444', '555555'] },
      { data: ['111111', '222222', '33333', '44444', '555555'] }
    ]
  }

}

export interface IGridHeader {
  title: string;
}

export interface IGridLine {
  data: string[];
}

export interface IGridData {
  headers: IGridHeader[];
  lines: IGridLine[];
}
