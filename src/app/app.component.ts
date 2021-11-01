import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

import {DataServiceService} from './services/data-service.service';

// const socket = io('http://localhost:8080');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dashboard';
  chart;
  chart2 = [];
  pie: any;
  doughnut: any;
  totalSales = 0;
  data1 = [];

  constructor(private service: DataServiceService) { }

  ngOnInit() {

    const resp = this.service.getTotalSales();
    resp.subscribe((data) => {
      console.log(data, 'check');
      this.totalSales = data;
    });
    console.log(this.totalSales, 'total sales');

    // socket.on('data1', (res) => {
    //   this.updateChartData(this.chart, res, 0);
    //   this.updateChartData(this.doughnut, res.slice(0, 5), 0);
    // });

    // socket.on('data2', (res) => {
    //   this.updateChartData(this.chart, res, 1);
    // });

    this.chart = new Chart('bar', {
      type: 'bar',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Sales by Division'
        },
      },
      data: {
        labels: ['Women', 'Men', 'Children'],
        datasets: [
          {
            type: 'bar',
            label: 'My First dataset',
            data: [243, 156, 365],
            backgroundColor: 'rgba(0,123,255,0.4)',
            borderColor: 'rgba(255,0,255,0.4)',
            fill: false,
          }
        ]
      }
    });

    const options = {
      // aspectRatio: 1,
      // legend: false,
      tooltips: false,

      elements: {
        point: {
          borderWidth: function (context) {
            return Math.min(Math.max(1, context.datasetIndex + 1), 8);
          },
          hoverBackgroundColor: 'transparent',
          hoverBorderColor: function (context) {
            return 'red';
          },
          hoverBorderWidth: function (context) {
            let value = context.dataset.data[context.dataIndex];
            return Math.round(8 * value.v / 1000);
          },
          radius: function (context) {
            let value = context.dataset.data[context.dataIndex];
            let size = context.chart.width;
            let base = Math.abs(value.v) / 1000;
            return (size / 24) * base;
          }
        }
      }
    };

    // new Chart('bubble', {
    //   type: 'bubble',
    //   options: options,
    //   data: {
    //     datasets: [
    //       {
    //       backgroundColor: 'rgba(255,0,0,0.4)',
    //       label: 'Name 1',
    //       data: [{
    //         x: 50,
    //         y: 60,
    //         v: 200
    //         }, {
    //           x: 50,
    //           y: 80,
    //           v: 700
    //         }, {
    //           x: 80,
    //           y: 60,
    //           v: 100
    //         }, {
    //         x: 60,
    //         y: 60,
    //         v: 500
    //         }, {
    //         x: 90,
    //         y: 80,
    //         v: 800
    //         }]
    //       }, {
    //         backgroundColor: 'rgba(0,255,0,0.4)',
    //         label: 'Name 2',
    //         data: [{
    //           x: 60,
    //           y: 20,
    //           v: 200
    //         }, {
    //           x: 55,
    //           y: 70,
    //           v: 800
    //         }, {
    //           x: 80,
    //           y: 30,
    //           v: 500
    //         }, {
    //           x: 70,
    //           y: 40,
    //           v: 800
    //         }]}]
    //   }
    // });

    this.doughnut =  new Chart('doughnut', {
      type: 'doughnut',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Sales by City'
        }, legend: {
					position: 'top',
				}, animation: {
					animateScale: true,
					animateRotate: true
				}
      },
      data: {
				datasets: [{
					data: [45, 10, 5, 25, 15, 10, 5],
					backgroundColor: ['brown', 'green', 'blue', 'orange', 'yellow', 'red', 'bla ck'],
					label: 'Dataset 1'
				}],
				labels: ['New York', 'Dallas', 'Los Angeles', 'Chicago', 'Washington', 'Texas', 'new Mexico']
			}
    });

  }

  addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

updateChartData(chart, data, dataSetIndex) {
  chart.data.datasets[dataSetIndex].data = data;
  chart.update();
}

}
