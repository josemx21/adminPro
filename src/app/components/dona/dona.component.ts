import { Component, Input, OnInit, Output } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  @Input() title: string = 'Sin titulo';

  @Input('labels') doughnutChartLabels: Label[] = ['Label1', 'Label2', 'Label3'];

  @ Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100],

  ];

  public colors: Color[] = [
    { backgroundColor: ['#6857e6', '#009fee', '#f02059']}
  ]
/*    public doughnutChartType: ChartType = 'doughnut'; */

  constructor() { }

  ngOnInit(): void {
  }

}
