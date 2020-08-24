import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnDestroy {

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
          stacked: true
      }]
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [];
  public showChart = false;

  private headers: HttpHeaders = new HttpHeaders();
  private dataSubscription: Subscription;
  private neList = [];
  private nsList = [];
  private nwList = [];
  private nrlList = [];
  private nlrList = [];

  constructor(private http: HttpClient) {
    this.headers.set('Content-type', 'application/json');
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataSubscription = this.http.get('https://api.bluecitytechnology.com/s/smp/', { headers: this.headers}).subscribe((data: any) => {
      if (data) {
        this.resetLists();
        const dateOptions = { hour: '2-digit', minute: '2-digit' };
        this.barChartLabels = data.plot.x.map(value => new Date(value).toLocaleString('en-US', dateOptions));
        for (const item of Object.values(data.data)) {
          this.addToLists(item);
        }
        this.setChartData();
        this.showChart = true;
      }
    });
  }

  resetLists() {
    this.neList = [];
    this.nsList = [];
    this.nwList = [];
    this.nrlList = [];
    this.nlrList = [];
  }

  addToLists(value) {
    value.ne ? this.neList.push(value.ne) : this.neList.push(0);
    value.ns ? this.nsList.push(value.ns) : this.nsList.push(0);
    value.nw ? this.nwList.push(value.nw) : this.nwList.push(0);
    value.nrl ? this.nrlList.push(value.nrl) : this.nrlList.push(0);
    value.nlr ? this.nlrList.push(value.nlr) : this.nlrList.push(0);
  }

  setChartData() {
    this.barChartData = [
      { data: this.neList, label: 'ne' },
      { data: this.nsList, label: 'ns' },
      { data: this.nwList, label: 'nw' },
      { data: this.nrlList, label: 'nrl' },
      { data: this.nlrList, label: 'nlr' }
    ];
  }

  ngOnDestroy() {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }

}
