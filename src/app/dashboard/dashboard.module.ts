import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';


import { BusyModule } from 'angular2-busy';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    BusyModule,
    //HttpModule,
    //BrowserAnimationsModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
