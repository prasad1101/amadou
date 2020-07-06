import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-types',
  templateUrl: './report-types.component.html',
  styleUrls: ['./report-types.component.css']
})
export class ReportTypesComponent implements OnInit {

  
dataForReport : any;
cellForReport : any;

  reports = [
    {
      reportName: "Report 1",
      reportId: "report1",
      reportDesc: "Test report description 1"
    },
    {
      reportName: "Report 2",
      reportId: "report2",
      reportDesc: "Test report description 2"
    },
    {
      reportName: "Report 3",
      reportId: "report3",
      reportDesc: "Test report description 3"
    },
    {
      reportName: "Report 4",
      reportId: "report4",
      reportDesc: "Test report description 4"
    }
  ]

  tableConfig = {
    reportId: null,
    dataFor: null,
    cellFor: null,
    subCellForReport: null,
    subCell: null,
    subCellId: null
  }

  constructor(private router : Router) { }

  ngOnInit() {
  }



  openReport(reportId) {
    if (reportId === this.tableConfig.reportId) {
      this.tableConfig.reportId = null
      this.dataForReport = null
      this.cellForReport = null
      this.tableConfig.dataFor = null
      this.tableConfig.cellFor = null
    } else {
      this.tableConfig.reportId = reportId;
    }
  }

openCondition(reportId){
this.router.navigateByUrl("condition")
}

  openMetric(reportId) {
    this.router.navigateByUrl("metric")

  }
  openAgg(reportId) {
    this.router.navigateByUrl("aggrigator")

  }
  openSource(reportId) {
    this.router.navigateByUrl("source")

  }

}
