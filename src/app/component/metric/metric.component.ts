import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) { }

  report: any

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      console.log("report params", params);
      this.report = params.report;
    });
  }

}
