import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { MetricComponent } from './component/metric/metric.component';
import { ConditionComponent } from './component/condition/condition.component';
import { DocumentationComponent } from './component/documentation/documentation.component';
import { AggrigatorComponent } from './component/aggrigator/aggrigator.component';
import { ReportTypesComponent } from './component/report-types/report-types.component';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MetricComponent,
    ConditionComponent,
    DocumentationComponent,
    AggrigatorComponent,
    ReportTypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
