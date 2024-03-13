import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartistModule } from 'ng-chartist';

interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-visao-geral',
  standalone: true,
  imports: [ChartistModule, CommonModule],
  templateUrl: './visao-geral.component.html',
  styleUrl: './visao-geral.component.css',
})
export class VisaoGeralGeralComponent implements OnInit {
  public tableData1: TableData;

  constructor() {
    this.tableData1 = {} as TableData;
  }

  ngOnInit() {
    this.tableData1 = {
      headerRow: [
        'Nota por pergunta',
        // , 'Name', ''
      ],
      dataRows: [
        ['1', 'Andrew Mike', '22'],
        ['2', 'John Doe', '22'],
        ['3', 'Alex Mike', '22'],
        ['4', 'Mike Monday', '22'],
        ['5', 'Paul Dickens', '22'],
      ],
    };
  }
}
