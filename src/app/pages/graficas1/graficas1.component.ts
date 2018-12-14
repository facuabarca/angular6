import { Component, OnInit } from '@angular/core';
import { GraficoDona } from '../../shared/models/grafico-dona.model';
import { GRAFICOSDONA } from '../../shared/mock-graficos';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})

export class Graficas1Component implements OnInit {

  graficos: GraficoDona[];

  constructor() {
  }

  ngOnInit() {
    this.graficos = GRAFICOSDONA.map(el => {
      return new GraficoDona(el);
    });
  }
}
