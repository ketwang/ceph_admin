import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';


import { BusyModule } from 'angular2-busy';

import { TreeModule } from 'angular-tree-component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    BusyModule,
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    //HttpModule,
    //BrowserAnimationsModule
    TreeModule,
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
