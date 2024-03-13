import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PlantaService } from '../../planta-service';
import { MatIcon } from '@angular/material/icon';
import { ChartistModule } from 'ng-chartist';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { ApiconnectService } from '../../services/apiconnect.service';
import { environment } from '../../environment';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

export type ChartSeries = {
  name: string;
  data: number[];
};

@Component({
  selector: 'app-adm-dashboard',
  standalone: true,
  imports: [
    ChartistModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatInputModule,
    RouterOutlet,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatIcon,
    MatSelectModule,
    MatSidenavModule,
    MatFormFieldModule,
    NgApexchartsModule,
  ],
  templateUrl: './adm-dashboard.component.html',
  styleUrl: './adm-dashboard.component.css',
})
export class AdmDashboardComponent implements OnInit {
  title = 'adm-dash';

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  slideAnimationActive: boolean = false;

  visibleCards: any[];
  selected: string = '';

  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  public chartSeries1: Partial<ChartSeries>;
  public chartSeries2: Partial<ChartSeries>;
  public chartSeries3: Partial<ChartSeries>;

  apiUrl: string | undefined;

  ngOnInit(): void {
    this.updateVisibleCards();

    this.apiConnectService.getCars().subscribe((response) => {
      if (response.body) {
        for (let i = 0; i < response.body.length; i += 3) {
          if (response.body[i].descricao === 'ansiedade generalizada') {
            this.chartSeries1.data?.push(response.body[i].quantidade_atestados);
          } else if (
            response.body[i].descricao ===
            'transtorno misto ansioso e depressivo'
          ) {
            this.chartSeries2.data?.push(
              response.body[i]?.quantidade_atestados
            );
          } else {
            this.chartSeries3.data?.push(
              response.body[i]?.quantidade_atestados
            );
          }
          if (response.body[i + 1].descricao === 'ansiedade generalizada') {
            this.chartSeries1.data?.push(
              response.body[i + 1].quantidade_atestados
            );
          } else if (
            response.body[i + 1].descricao ===
            'transtorno misto ansioso e depressivo'
          ) {
            this.chartSeries2.data?.push(
              response.body[i + 1]?.quantidade_atestados
            );
          } else {
            this.chartSeries3.data?.push(
              response.body[i + 1]?.quantidade_atestados
            );
          }
          if (response.body[i + 2].descricao === 'ansiedade generalizada') {
            this.chartSeries1.data?.push(
              response.body[i + 2].quantidade_atestados
            );
          } else if (
            response.body[i + 2].descricao ===
            'transtorno misto ansioso e depressivo'
          ) {
            this.chartSeries2.data?.push(
              response.body[i + 2]?.quantidade_atestados
            );
          } else {
            this.chartSeries3.data?.push(
              response.body[i + 2]?.quantidade_atestados
            );
          }

          console.log(
            this.chartSeries1.data,
            this.chartSeries2.data,
            this.chartSeries3.data
          );
        }
      }

      return response.body;
    });
  }

  constructor(
    private apiConnectService: ApiconnectService,
    private _formBuilder: FormBuilder
  ) {
    this.apiUrl = environment.apiUrl;
    this.visibleCards = [] as any[];
    this.selected = '11';
    
    this.chartSeries1 = {};
    this.chartSeries1.data = [];
    this.chartSeries1.name = "ansiedade generalizada";
    this.chartSeries2 = {};
    this.chartSeries2.data = [];
    this.chartSeries2.name = "transtorno misto ansioso e depressivo";
    this.chartSeries3 = {};
    this.chartSeries3.data = [];
    this.chartSeries3.name = "transtornos de adaptação";

    this.chartOptions = {
      series: [
        {
          name: 'Ansiedade generalizada',
          data: this.chartSeries1.data,
          color: '#CC00FF',
        },
        {
          name: 'Transtorno misto ansioso e depressivo',
          data: this.chartSeries2.data,
          color: '#6D6AFF',
        },
        {
          name: 'Transtornos de adaptação',
          data: this.chartSeries3.data,
          color: '#00E096',
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

  cards = [
    {
      title: 'Card 1',
      content: {
        perc: '22',
      },
    },
    {
      title: 'Card 2',
      content: {
        perc: '23',
      },
    },
    {
      title: 'Card 3',
      content: {
        perc: '24',
      },
    },
    {
      title: 'Card 4',
      content: {
        perc: '25',
      },
    },
    {
      title: 'Card 5',
      content: {
        perc: '26',
      },
    },
    {
      title: 'Card 6',
      content: {
        perc: '27',
      },
    },
    {
      title: 'Card 7',
      content: {
        perc: '28',
      },
    },
  ];

  isSlidRight: boolean = false;

  focus(event: MouseEvent) {
    const currentFocusedElements = document.querySelectorAll('.focus');
    currentFocusedElements.forEach((element) => {
      element.classList.remove('focus');
    });

    const cardElement = (event.currentTarget as HTMLElement).closest(
      '.simple-card'
    );
    if (cardElement) {
      const selectedCard = this.cards.find(
        (card) => card.title === cardElement.textContent
      );
      this.selected = selectedCard?.content.perc || '';
      cardElement.classList.add('focus');
      console.log(cardElement);
    }
  }

  updateVisibleCards() {
    this.visibleCards = this.cards.slice(this.startIndex, this.endIndex + 1);
  }

  startIndex = 0;
  endIndex = 3;

  next() {
    if (this.endIndex < this.cards.length - 1) {
      this.startIndex += 1;
      this.endIndex += 1;
    } else {
      this.startIndex = 0;
      this.endIndex = 3;
    }

    this.slideAnimationActive = true;
    this.updateVisibleCards();

    setTimeout(() => {
      this.slideAnimationActive = false;
    }, 300);
  }

  slideRight() {
    this.isSlidRight = !this.isSlidRight;
  }
}
