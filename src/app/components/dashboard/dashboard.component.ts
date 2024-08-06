
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
// import { ChartsModule } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts';
// import ChartDataLabels from 'chartjs-plugin-datalabels';
// import { Chart } from 'chart.js'
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BaseChartDirective],
  providers: [
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  constructor(private dash: DashboardService) { }
  public chart: any;
  barChartData: any;
  public pieChart: any;
  public barChart: any;
  public pieChartData: any

  ngOnInit(): void {
    this.getData();
  }


  createChart() {
    this.barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: this.barChartData?.map((row: any) => row.Month),
        datasets: [
          {
            label: 'Popular Course Data',
            data: this.barChartData?.map((row: any) => row.Student_Count),
          },
        ],
      },
    });
  }
  getData() {

    this.dash.fetchData().subscribe((res: any) => {
      this.pieChartData = res[0];
      this.barChartData = res[1]
      this.createChart();
      this.createChartPie(this.pieChartData)
    })

  }
  getPieChart(updatedData: any) {
    debugger
    let dataValue = {
      labels: updatedData.map((res: any) => res.Course_Name),
      datasets: [
        {
          label: 'Popular Course Data',
          data: updatedData.map((res: any) => res.Enrollment_Count),
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(215, 205, 86)',
          ],
          hoverOffset: 4,
        },
      ],

    };
    return dataValue;
  }

  createChartPie(dataValue: any) {
    this.chart = new Chart('MyChart', {
      type: 'pie',
      data: this.getPieChart(dataValue),
    });
  }




}
