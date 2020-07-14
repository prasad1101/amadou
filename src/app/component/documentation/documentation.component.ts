import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) { }

  report: any

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      console.log("report params", params);
      this.report = params.report;
    });
  }
}
