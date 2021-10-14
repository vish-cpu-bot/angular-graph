import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-barchartexample',
  templateUrl: './barchartexample.component.html',
  styleUrls: ['./barchartexample.component.scss'],
})
export class BarchartexampleComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;
  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    const labels = ['Gas', 'Electricity', 'Coal'];
    new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'My First Dataset',
            data: [65, 59, 75],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
            ],
            borderWidth: 1,
            barThickness: 50,
          },
        ],
      },
    });
  }
}
