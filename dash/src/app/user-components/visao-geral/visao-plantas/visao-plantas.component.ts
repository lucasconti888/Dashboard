import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import 'chartist/dist/index.css';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartistModule } from 'ng-chartist';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexGrid,
  ApexStroke,
  ApexTitleSubtitle,
  ApexXAxis,
  ChartComponent,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-visao-plantas',
  standalone: true,
  imports: [MatIconModule, ChartistModule, NgApexchartsModule],
  templateUrl: './visao-plantas.component.html',
  styleUrl: './visao-plantas.component.css',
})
export class VisaoPlantasComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Desktops',
          data: [96, 41, 35, 51, 49, 62, 69, 91, 21],
        },
        {
          name: 'Depressão',
          data: [12, 32, 78, 54, 98, 43, 56, 76, 100],
        },
        {
          name: 'Ansiedade',
          data: [45, 21, 24, 68, 135, 61, 23, 67, 110],
        },
      ],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], 
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
      },
    };
  }
}
