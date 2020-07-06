import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DocumentationComponent } from './component/documentation/documentation.component';
import { MetricComponent } from './component/metric/metric.component';
import { ConditionComponent } from './component/condition/condition.component';
import { AggrigatorComponent } from './component/aggrigator/aggrigator.component';
import { ReportTypesComponent } from './component/report-types/report-types.component';


const routes: Routes = [
  {
    path : "", component : HomeComponent
  },
  {
    path: "documentation", component: DocumentationComponent
  },
  {
    path: "metric", component: MetricComponent
  },
  {
    path: "condition", component: ConditionComponent
  },
  {
    path: "aggrigator", component: AggrigatorComponent
  },
  {
    path: "report-types", component: ReportTypesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
