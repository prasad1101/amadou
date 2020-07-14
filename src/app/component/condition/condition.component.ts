import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) { }

report : any

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      console.log("report params",params);
      this.report = params.report;
    });
  }

}
