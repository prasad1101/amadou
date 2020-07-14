import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aggrigator',
  templateUrl: './aggrigator.component.html',
  styleUrls: ['./aggrigator.component.css']
})
export class AggrigatorComponent implements OnInit {

  constructor(private _activatedRoute : ActivatedRoute) { }

  report: any

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      console.log("report params", params);
      this.report = params.report;
    });
  }

}
