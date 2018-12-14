import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
})
export class GraficoDonaComponent implements OnInit {

  @Input() leyenda: string = 'Leyenda';
  @Input() doughnutChartData: number[] = [];
  @Input() doughnutChartLabels: string[] = [];
  @Input() doughnutChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}
